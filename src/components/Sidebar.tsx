import React, { useState } from "react";
import { assets } from "../assets/assets";

const Sidebar = () => {
  const [extendBar, setExtendBar] = useState(false);

  const toggleBar = () => {
    setExtendBar(!extendBar);
  };

  return (
    <div className="min-h-[100vh] inline-flex flex-col justify-between bg-slate-100 [f0f4f9] py-[25px] px-[15px]">
      <div>
        <img
          onClick={toggleBar}
          className="w-[20px] block m-[10px] cursor-pointer"
          src={assets.menu_icon}
          alt="menu icon"
        />
        <div className="mt-[50px] inline-flex items-center gap-[10px] py-[10px] px-[15px] bg-[#e6eaf1] rounded-[50px] text-grey-100 cursor-pointer">
          <img className="w-[20px]" src={assets.plus_icon} alt="plus icon" />
          {extendBar ? <p>New Chat</p> : null}
        </div>
        {extendBar ? (
          <div className="flex flex-col ">
            <p className="mt-[30px] mb-[20px]">Recent</p>
            <div className="flex items-center gap-[10px] p-[10px] pr-[40px] rounded-[50px] text-[#282828] hover:bg-slate-200 cursor-pointer">
              <img
                className="w-[20px]"
                src={assets.message_icon}
                alt="message icon"
              />
              <p>What is react...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-[10px] p-[10px] pr-[40px] rounded-[50px] text-[#282828] hover:bg-slate-200 cursor-pointer ">
          <img
            className="w-[20px]"
            src={assets.question_icon}
            alt="question icon"
          />
          {extendBar ? <p>Help</p> : null}
        </div>
        <div className="flex items-center gap-[10px] p-[10px] pr-[40px] rounded-[50px] text-[#282828] hover:bg-slate-200 cursor-pointer">
          <img
            className="w-[20px]"
            src={assets.history_icon}
            alt="history icon"
          />
          {extendBar ? <p>Activity</p> : null}
        </div>
        <div className="flex items-center gap-[10px] p-[10px] pr-[40px] rounded-[50px] text-[#282828] hover:bg-slate-200 cursor-pointer">
          <img
            className="w-[20px]"
            src={assets.setting_icon}
            alt="setting icon"
          />
          {extendBar ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
