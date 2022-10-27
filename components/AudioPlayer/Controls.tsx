import React from "react";
import Image from "next/image";
import classNames from "classnames";

interface IProps {
  isPlaying: boolean;
  nextSong: () => void;
  prevSong: () => void;
  playPause: () => void;
  onRepeat: () => void;
  onShuffle: () => void;
  isShuffle: boolean;
  isRepeat: boolean;
}
function Controls({
  isPlaying,
  prevSong,
  nextSong,
  playPause,
  isShuffle,
  isRepeat,
  onRepeat,
  onShuffle,
}: IProps) {
  return (
    <div className="flex flex-row justify-center items-center mb-2 ">
      <div className="flex flex-col items-center mx-6">
        <i
          className={classNames(
            `icon-shuffle `,
            isShuffle ? "text-[#2bb540]" : "text-gray-400 hover:text-white"
          )}
          onClick={onShuffle}
        ></i>
        <div
          className={classNames(
            `w-[3px] h-[3px] rounded-full my-1`,
            isShuffle ? "bg-[#2bb540] block" : "hidden"
          )}
        ></div>
      </div>

      <i
        onClick={prevSong}
        className="icon-Previous cursor-pointer text-gray-300 hover:text-white"
      ></i>
      <div className="mx-6 mt-1.5 scale-100 hover:scale-110">
        {!isPlaying ? (
          <div
            onClick={playPause}
            className="bg-white text-black 
            rounded-full p-1 text-center h-8 w-8 flex 
            items-center justify-center
            cursor-pointer"
          >
            <Image src="/svgs/play.svg" width={30} height={30} alt="play" />
          </div>
        ) : (
          <div
            onClick={playPause}
            className="bg-white rounded-full p-1
             text-center h-8 w-8 flex
            items-center justify-center
             cursor-pointer"
          >
            <Image src="/svgs/pause.svg" width={30} height={30} alt="play" />
          </div>
        )}
      </div>

      <i
        onClick={nextSong}
        className="icon-Next cursor-pointer text-gray-300 hover:text-white"
      ></i>

      <div className="flex flex-col items-center mx-6">
        <i
          onClick={onRepeat}
          className={classNames(
            "icon-repeat",
            isRepeat ? "text-[#2bb540]" : "text-gray-400 hover:text-white"
          )}
        ></i>
        <div
          className={classNames(
            `w-[3px] h-[3px] rounded-full my-1 `,
            isRepeat ? "bg-[#2bb540] block" : "hidden"
          )}
        ></div>
      </div>
    </div>
  );
}

export default Controls;
