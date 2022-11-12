import React from "react";
import LikeButton from "./LikeButton";
import VolumeControls from "./VolumeControls";
import { useRouter } from "next/router";
import Link from "next/link";
interface IProps {
  volume: number;
  updateVolume: (e: any) => void;
  className: string;
  showVolumeSeekBar: boolean;
  track_id: number;
  download_url: string;
}

function Buttons({
  volume,
  updateVolume,
  className,
  showVolumeSeekBar,
  track_id,
  download_url,
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
        <Link
          href={download_url + `?filename=${track_id}.mp3`}
          download={`${track_id}.mp3`}
          target="_blank"
        >
          <i
            className="icon-download text-gray-400 text-[16px]
           hover:text-white cursor-pointer mx-2"
          ></i>
        </Link>

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
