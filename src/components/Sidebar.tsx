import React, { useContext, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { RiQuestionLine } from "react-icons/ri";
import { MdHistory } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { context } from "../context/Context";
import { LuMoon } from "react-icons/lu";
import { LuSun } from "react-icons/lu";

type SidebarProps = {
  theme: string;
  setTheme: (theme: string) => void | string;
};

const Sidebar = ({ theme, setTheme }: SidebarProps) => {
  const [extendBar, setExtendBar] = useState(false);

  const ctx = useContext(context);
  const onSent = ctx?.onSent ?? (() => {});
  const history = ctx?.history ?? [];
  const setHistory: React.Dispatch<React.SetStateAction<string[]>> =
    ctx?.setHistory ?? (() => {});
  const newChat = ctx?.newChat ?? (() => {});

  const loadPrompt = async (prompt: string | string[]) => {
    if (typeof prompt === "string") {
      setHistory((prevHistory) => [...prevHistory]);
      await onSent(prompt);
    } else {
      setHistory((prevHistory) => [...prevHistory]);
      for (const p of prompt) {
        await onSent(p);
      }
    }
  };

  const toggleBar = () => {
    setExtendBar(!extendBar);
  };

  return (
    <div
      className="min-h-[100vh] inline-flex flex-col justify-between bg-slate-100 [f0f4f9] py-[25px] px-[15px] sidebar"
      id={theme}
    >
      <div
        style={{
          width: extendBar ? "200px" : "50px",
          transition: "width 0.3s ease",
        }}
      >
        <div>
          <button
            onClick={toggleBar}
            className="w-[20px] block m-[10px] cursor-pointer"
          >
            <FiMenu size={20} />
          </button>
          {theme === "light" ? (
            <button
              onClick={() => setTheme("dark")}
              className="w-[20px] block m-[10px] cursor-pointer"
            >
              <LuMoon size={20} />
            </button>
          ) : (
            <button
              onClick={() => setTheme("light")}
              className="w-[20px] block m-[10px] cursor-pointer"
            >
              <LuSun size={20} />
            </button>
          )}
        </div>
        <div
          onClick={() => newChat()}
          className="mt-[50px] inline-flex items-center text-center gap-[10px] py-[10px] px-[15px] bg-[#e6eaf1] rounded-[50px] text-grey-100 cursor-pointer"
          id={theme}
        >
          <button>
            <FaPlus size={20} color="grey" />
          </button>
          {extendBar ? <p>New Chat</p> : <></>}
        </div>
        {extendBar ? (
          <div className="fadeIn flex flex-col">
            <p className="mt-[30px] mb-[20px]">Recent</p>
            {history.map((item: string) => {
              return (
                <div
                  onClick={() => loadPrompt(item)}
                  className="fadeIn flex items-center gap-[10px] p-[10px] pr-[40px] rounded-[50px] text-[#282828] hover:bg-slate-200 cursor-pointer dark-hover"
                  id={theme}
                >
                  <i>
                    <LuMessageSquare size={18} />
                  </i>
                  <p className="text-sm font-semibold">
                    {item.slice(0, 18)}...
                  </p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="flex flex-col">
        <div
          id={theme}
          className="flex items-center gap-[10px] p-[10px] pr-[40px] rounded-[50px] text-[#282828] hover:bg-slate-200 cursor-pointer dark-hover"
          style={{
            marginBottom: extendBar ? "15px" : "0px",
            transition: "margin-bottom 0.3s ease",
          }}
        >
          <button>
            <RiQuestionLine size={22} />
          </button>
          {extendBar ? <p>Help</p> : null}
        </div>
        <div
          id={theme}
          className="flex items-center gap-[10px] p-[10px] pr-[40px] rounded-[50px] text-[#282828] hover:bg-slate-200 cursor-pointer dark-hover"
          style={{
            marginBottom: extendBar ? "15px" : "0px",
            transition: "margin-bottom 0.3s ease",
          }}
        >
          <button>
            <MdHistory size={22} />
          </button>
          {extendBar ? <p>Activity</p> : null}
        </div>
        <div
          id={theme}
          className="flex items-center gap-[10px] p-[10px] pr-[40px] rounded-[50px] text-[#282828] hover:bg-slate-200 cursor-pointer dark-hover"
          style={{
            marginBottom: extendBar ? "15px" : "0px",
            transition: "margin-bottom 0.3s ease",
          }}
        >
          <button>
            <FiSettings size={22} />
          </button>
          {extendBar ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
