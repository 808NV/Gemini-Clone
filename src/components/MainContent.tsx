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

const MainContent = () => {
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
  const onSent = ctx?.onSent ?? (() => {});

  return (
    <div className="flex-1 min-h-[100vh] pb-[15vh] relative">
      <nav className="flex items-center justify-between text-xl p-[20px] text-[#585858]">
        <p>Gemini</p>
        <img
          className="w-[40px] rounded-[50%]"
          src="/src/assets/avt.jpg"
          alt="user icon"
        />
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
              <div className="h-[200px] p-[15px] bg-slate-100 rounded-[10px] relative cursor-pointer hover:bg-slate-200">
                <p className="text-[#585858] text-[17px]">
                  Suggest places to visit in New York
                </p>
                <i className="p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]">
                  <IoCompassOutline size={22} />
                </i>
              </div>
              <div className="h-[200px] p-[15px] bg-slate-100 rounded-[10px] relative cursor-pointer hover:bg-slate-200">
                <p className="text-[#585858] text-[17px]">Explain React</p>
                <i className="p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]">
                  <FaRegLightbulb size={20} />
                </i>
              </div>
              <div className="h-[200px] p-[15px] bg-slate-100 rounded-[10px] relative cursor-pointer hover:bg-slate-200">
                <p className="text-[#585858] text-[17px]">Write a resume</p>
                <i className="p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]">
                  <LuPencilLine size={20} />
                </i>
              </div>
              <div className="h-[200px] p-[15px] bg-slate-100 rounded-[10px] relative cursor-pointer hover:bg-slate-200">
                <p className="text-[#585858] text-[17px]">
                  Improve the following code
                </p>
                <i className="p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]">
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
                src="src/assets/google-gemini-icon.png"
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
          <div className="flex items-center justify-between gap-[20px] bg-slate-100 py-[10px] px-[20px] rounded-[50px]">
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
                <button onClick={() => onSent()} className="cursor-pointer">
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
