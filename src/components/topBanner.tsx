import React from "react";
import Counters from "./counters";
import Buttons from "./buttons";

export default function TopBanner() {
  return (
    <div className="w-full flex items-center justify-between px-10">
        <div className="flex flex-col justify-center items-start">
        <div className="flex gap-5 items-center">
        <div>
          <img
            src="/images/avatar.png"
            alt=""
            className="object-contain w-16 h-16"
          />
        </div>

        <div className="flex flex-col gap-1.5 items-start text-white">
          <h4 className="m-0 text-xl">John</h4>
          <p className="text-gray-400 text-sm">@joohn313</p>
        </div>
      </div>

      <Counters />
        </div>

        <Buttons />        
    </div>
  );
}
