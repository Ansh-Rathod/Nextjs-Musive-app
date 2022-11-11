import React from "react";
import LikeButton from "./LikeButton";
import VolumeControls from "./VolumeControls";
import { useRouter } from "next/router";
interface IProps {
  volume: number;
  updateVolume: (e: any) => void;
  className: string;
  showVolumeSeekBar: boolean;
  track_id: number;
}

function Buttons({
  volume,
  updateVolume,
  className,
  showVolumeSeekBar,
  track_id,
}: IProps) {
  const router = useRouter();
  return (
    <div
      className={
        `w-full flex flex-row justify-end items-center
       ` + className
      }
    >
      <div
        className="flex flex-row items-center"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <LikeButton track_id={track_id} />
        <i
          className="icon-share text-gray-400 text-[16px]
           hover:text-white cursor-pointer mx-2"
        ></i>
        <i
          onClick={(e) => {
            e.stopPropagation();
            router.push("/queue");
          }}
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
