import React from "react";
import RenderIcon from "./RenderIcon";

const DashBoardIcons = ({ iconName }) => {


  return (
    <>
      <button onClick={()=>{
        console.log("hello")
      }} className="sm:flex p-2 items-center hover:bg-[#73628A] rounded-xl shadow-2xs text-amber-50 transition-colors duration-100">
        <div>
          <RenderIcon iconName={iconName}/>
        </div>
        <div className="ml-1">
          {iconName}
        </div>
      </button>
    </>
  );
};

export default DashBoardIcons;
