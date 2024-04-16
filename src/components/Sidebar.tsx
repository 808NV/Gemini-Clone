import React, { useContext, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { RiQuestionLine } from "react-icons/ri";
import { MdHistory } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { context } from "../context/Context";

const Sidebar = () => {
  const [extendBar, setExtendBar] = useState(false);
  const { onSent, history, setHistory } = useContext(context);

  const toggleBar = () => {
    setExtendBar(!extendBar);
  };

  return (
    <div className="min-h-[100vh] inline-flex flex-col justify-between bg-slate-100 [f0f4f9] py-[25px] px-[15px]">
      <div>
        <button
          onClick={toggleBar}
          className="w-[20px] block m-[10px] cursor-pointer"
        >
          <FiMenu size={20} />
        </button>
        <div className="mt-[50px] inline-flex items-center gap-[10px] py-[10px] px-[15px] bg-[#e6eaf1] rounded-[50px] text-grey-100 cursor-pointer">
          <button>
            <FaPlus size={20} color="grey" />
          </button>
          {extendBar ? <p>New Chat</p> : null}
        </div>
        {extendBar ? (
          <div className="flex flex-col">
            <p className="mt-[30px] mb-[20px]">Recent</p>
            {history.map((item: string, index: number) => {
              return (
                <div className="flex items-center gap-[10px] p-[10px] pr-[40px] rounded-[50px] text-[#282828] hover:bg-slate-200 cursor-pointer">
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
        <div className="flex items-center gap-[10px] p-[10px] pr-[40px] rounded-[50px] text-[#282828] hover:bg-slate-200 cursor-pointer ">
          <button>
            <RiQuestionLine size={22} />
          </button>
          {extendBar ? <p>Help</p> : null}
        </div>
        <div className="flex items-center gap-[10px] p-[10px] pr-[40px] rounded-[50px] text-[#282828] hover:bg-slate-200 cursor-pointer">
          <button>
            <MdHistory size={22} />
          </button>
          {extendBar ? <p>Activity</p> : null}
        </div>
        <div className="flex items-center gap-[10px] p-[10px] pr-[40px] rounded-[50px] text-[#282828] hover:bg-slate-200 cursor-pointer">
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
