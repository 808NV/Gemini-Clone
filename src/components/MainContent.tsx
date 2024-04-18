import React, { useContext } from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { PiCode } from "react-icons/pi";
import { IoCompassOutline } from "react-icons/io5";
import { LuPencilLine } from "react-icons/lu";
import { TbPhotoPlus } from "react-icons/tb";
import { BsMic } from "react-icons/bs";
import { VscSend } from "react-icons/vsc";
import { context } from "../context/Context";
import TxtToAudio from "./TxtToAudio";

type MainProps = {
  theme: string;
  setTheme: (theme: string) => void | string;
};

const MainContent = ({ theme }: MainProps) => {
  /*const { onSent, output, showResult, loading, resultData, setInput, input } =
    useContext(context);*/

  const ctx = useContext(context);
  const input = ctx?.input ?? "";
  const setInput: React.Dispatch<React.SetStateAction<string>> =
    ctx?.setInput ?? (() => {});
  const output = ctx?.output ?? "";
  const showResult = ctx?.showResult ?? false;
  const loading = ctx?.loading ?? false;
  const resultData = ctx?.resultData ?? "";
  const onSent: (prompt: string | void) => void = ctx?.onSent ?? (() => {});

  const sendPrompt = () => {
    onSent();
  };

  return (
    <div className="flex-1 min-h-[100vh] pb-[15vh] relative main" id={theme}>
      <nav className="flex items-center justify-between text-xl p-[20px] text-[#585858]">
        <p style={{ color: theme === "dark" ? "white" : "" }}>Gemini</p>
        <img className="w-[40px] rounded-[50%]" src="avt.jpg" alt="user icon" />
      </nav>

      <section className="max-w-[900px] m-auto">
        {!showResult ? (
          <>
            <div className="my-[50px] mx-[0px] text-5xl text-[#c4c7c5] font-medium p-[20px]">
              <p>
                <span className="mess">Hello, Stranger</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="grid grid-cols-auto-fill gap-4 p-[20px]">
              <div
                id={theme}
                className="h-[200px] p-[15px] bg-slate-100 rounded-[10px] relative cursor-pointer hover:bg-slate-200 dark-hover"
                onClick={() => setInput("Suggest places to visit in New York")}
              >
                <p
                  className="text-[#585858] text-[17px]"
                  style={{ color: theme === "dark" ? "white" : "" }}
                >
                  Suggest places to visit in New York
                </p>
                <i
                  className="p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]"
                  style={{ background: theme === "dark" ? "black" : "" }}
                >
                  <IoCompassOutline size={22} />
                </i>
              </div>
              <div
                id={theme}
                className="h-[200px] p-[15px] bg-slate-100 rounded-[10px] relative cursor-pointer hover:bg-slate-200 dark-hover"
                onClick={() => setInput("Explain React")}
              >
                <p
                  className="text-[#585858] text-[17px]"
                  style={{ color: theme === "dark" ? "white" : "" }}
                >
                  Explain React
                </p>
                <i
                  className="p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]"
                  style={{ background: theme === "dark" ? "black" : "" }}
                >
                  <FaRegLightbulb size={20} />
                </i>
              </div>
              <div
                id={theme}
                className="h-[200px] p-[15px] bg-slate-100 rounded-[10px] relative cursor-pointer hover:bg-slate-200 dark-hover"
                onClick={() => setInput("Write a resume")}
              >
                <p
                  className="text-[#585858] text-[17px]"
                  style={{ color: theme === "dark" ? "white" : "" }}
                >
                  Write a resume
                </p>
                <i
                  className="p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]"
                  style={{ background: theme === "dark" ? "black" : "" }}
                >
                  <LuPencilLine size={20} />
                </i>
              </div>
              <div
                id={theme}
                className="h-[200px] p-[15px] bg-slate-100 rounded-[10px] relative cursor-pointer hover:bg-slate-200 dark-hover"
                onClick={() => setInput("Improve the following code")}
              >
                <p
                  className="text-[#585858] text-[17px]"
                  style={{ color: theme === "dark" ? "white" : "" }}
                >
                  Improve the following code
                </p>
                <i
                  className="p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]"
                  style={{ background: theme === "dark" ? "black" : "" }}
                >
                  <PiCode size={20} />
                </i>
              </div>
            </div>{" "}
          </>
        ) : (
          <div className="scroll py-[0px] px-[5%] max-h-[70vh] overflow-y-scroll">
            <div className="flex items-center gap-3 pb-[2rem] overflow- ]">
              <img
                className="w-[30px] rounded-[50%]"
                src="src/assets/avt.jpg"
                alt=""
              />
              <span>{output}</span>
            </div>
            {!output ? <></> : <TxtToAudio />}
            <div className="flex items-start gap-[20px]">
              <img
                className="w-[30px]"
                src="google-gemini-icon.png"
                alt="gemini_icon"
              />
              {loading ? (
                <div className="loading-anim w-full flex flex-col gap-[10px]">
                  <hr className="rounded-[4px] border-none bg-slate-50 h-[20px]" />
                  <hr className="rounded-[4px] border-none bg-slate-50 h-[20px]" />
                  <hr className="rounded-[4px] border-none bg-slate-50 h-[20px]" />
                </div>
              ) : (
                <div className="text-[17px] font-light leading-[1.8]">
                  <span dangerouslySetInnerHTML={{ __html: resultData }} />
                </div>
              )}
            </div>
          </div>
        )}

        <div className="absolute bottom-0 w-[100%] max-w-[900px] py-0 px-[20px] m-auto">
          <div
            className="flex items-center justify-between gap-[20px] bg-slate-100 py-[10px] px-[20px] rounded-[50px]"
            id={theme}
          >
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="flex-1 bg-transparent border-none outline-none p-[10px] text-lg"
              type="text"
              placeholder="Enter a prompt here"
            />
            <div className="flex items-center gap-[15px]">
              <button className="cursor-pointer">
                <TbPhotoPlus size={24} />
              </button>
              <button className="cursor-pointer">
                <BsMic size={24} />
              </button>
              {input ? (
                <button onClick={() => sendPrompt()} className="cursor-pointer">
                  <VscSend size={24} />
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
          <p className="text-[13px] my-[15px] mx-auto text-center font-light">
            Gemini may display inaccurate info, including about people, so
            double-check its response.{" "}
            <span>
              <a className="underline" href="#">
                Your privacy on Gemini Apps
              </a>
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
