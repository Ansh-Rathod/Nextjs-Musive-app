import React from "react";
import VolumeControls from "./VolumeControls";
interface IProps {
  volume: number;
  updateVolume: (e: any) => void;
  className: string;
  showVolumeSeekBar: boolean;
}

function Buttons({
  volume,
  updateVolume,
  className,
  showVolumeSeekBar,
}: IProps) {
  return (
    <div
      className={
        `w-full flex flex-row justify-end items-center
       ` + className
      }
    >
      <div className="flex flex-row items-center">
        <i className="icon-Like text-gray-400 text-[14px] mx-2"></i>
        <i
          className="icon-share text-gray-400 text-[16px]
           hover:text-white cursor-pointer mx-2"
        ></i>
        <i
          className="icon-queue text-gray-400 text-[14px]
           hover:text-white cursor-pointer mx-2"
        ></i>
        {showVolumeSeekBar && (
          <VolumeControls
            isFullScreen={false}
            updateVolume={updateVolume}
            volume={volume}
          />
        )}
      </div>
    </div>
  );
}

export default Buttons;
