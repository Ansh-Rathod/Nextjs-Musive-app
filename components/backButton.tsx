import React from "react";
import { shadeColor } from "../configs/utils";
import { useRouter } from "next/router";

function NavBar({ condition, color, title, inactiveColor }: any) {
  const router = useRouter();
  return (
    <div
      style={{
        backgroundColor: condition
          ? shadeColor(color, -40)
          : inactiveColor ?? "transparent",
      }}
      className="absolute px-8 py-4 z-20 mobile:px-4 tablet:px-6 mini-laptop:px-7
          w-[calc(100vw_-_14rem)] mini-laptop:w-[calc(100vw_-_55px)] 
        tablet:w-screen mobile:w-screen overflow-x-hidden flex items-center mobile:py-2
          "
    >
      <div
        onClick={() => router.back()}
        className="w-fit bg-black  text-center 
            flex items-center justify-center rounded-full px-1 bg-opacity-25 hover:bg-opacity-50 cursor-pointer"
      >
        <i className="icon-arrow_back text-[20px] text-center pl-2 py-2 mobile:text-base mobile:py-1"></i>
      </div>
      <div className="mx-4">
        {condition && (
          <h1 className="text-2xl capitalize font-ProximaBold mobile:text-xl">
            {title}
          </h1>
        )}
      </div>
    </div>
  );
}

export default NavBar;
