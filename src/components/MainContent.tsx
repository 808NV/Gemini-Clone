import React from "react";
import { assets } from "../assets/assets";

const MainContent = () => {
  return (
    <div className="flex-1 min-h-[100vh] pb-[15vh] relative">
      <nav className="flex items-center justify-between text-xl p-[20px] text-[#585858]">
        <p>Gemini</p>
        <img
          className="w-[40px] rounded-[50%]"
          src={assets.user_icon}
          alt="user icon"
        />
      </nav>

      <section className="max-w-[900px] m-auto">
        <div className="my-[50px] mx-[0px] text-5xl text-[#c4c7c5] font-medium p-[20px]">
          <p>
            <span className="mess">Hello, Dev</span>
            <p>How can I help ypu today?</p>
          </p>
        </div>
        <div className="grid grid-cols-auto-fill gap-4 p-[20px]">
          <div className="h-[200px] p-[15px] bg-slate-100 rounded-[10px] relative cursor-pointer hover:bg-slate-200">
            <p className="text-[#585858] text-[17px]">
              Suggest beautiful places to see on an upcoming road trip
            </p>
            <img
              className="w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]"
              src={assets.compass_icon}
              alt="compass icon"
            />
          </div>
          <div className="h-[200px] p-[15px] bg-slate-100 rounded-[10px] relative cursor-pointer hover:bg-slate-200">
            <p className="text-[#585858] text-[17px]">
              Briefly summarize this concept: urban planing
            </p>
            <img
              className="w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]"
              src={assets.bulb_icon}
              alt="bulb icon"
            />
          </div>
          <div className="h-[200px] p-[15px] bg-slate-100 rounded-[10px] relative cursor-pointer hover:bg-slate-200">
            <p className="text-[#585858] text-[17px]">
              Brainstorm team bonding activities for our work retreat
            </p>
            <img
              className="w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]"
              src={assets.message_icon}
              alt="message icon"
            />
          </div>
          <div className="h-[200px] p-[15px] bg-slate-100 rounded-[10px] relative cursor-pointer hover:bg-slate-200">
            <p className="text-[#585858] text-[17px]">
              Improve the readability of the following code
            </p>
            <img
              className="w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]"
              src={assets.code_icon}
              alt="code icon"
            />
          </div>
        </div>
        <div className="absolute bottom-0 w-[100%] max-w-[900px] py-0 px-[20px] m-auto">
          <div className="flex items-center justify-between gap-[20px] bg-slate-100 py-[10px] px-[20px] rounded-[50px]">
            <input
              className="flex-1 bg-transparent border-none outline-none p-[10px] text-lg"
              type="text"
              placeholder="Enter a prompt here"
            />
            <div className="flex items-center gap-[15px]">
              <img
                className="w-[24px] cursor-pointer"
                src={assets.gallery_icon}
                alt="gallery icon"
              />
              <img
                className="w-[24px] cursor-pointer"
                src={assets.mic_icon}
                alt="mic icon"
              />
              <img
                className="w-[24px] cursor-pointer"
                src={assets.send_icon}
                alt="send icon"
              />
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
