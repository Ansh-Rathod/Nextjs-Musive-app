import React from "react";
import Image from "next/image";
import classNames from "classnames";
import Buttons from "./Buttons";

interface IProps {
  isPlaying: boolean;
  nextSong: () => void;
  prevSong: () => void;
  playPause: () => void;
  onRepeat: () => void;
  onShuffle: () => void;
  isShuffle: boolean;
  isRepeat: boolean;
  isFullScreen: boolean;
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
  isFullScreen,
}: IProps) {
  if (isFullScreen) {
    return (
      <div
        className="flex flex-row justify-between 
    items-center mt-6 tablet:w-[400px] mobile:w-[320px]"
      >
        <div className="flex flex-col items-center mr-6 ">
          <i
            className={classNames(
              `icon-shuffle mini-laptop:text-[18px] laptop:text-[20px]
              tablet:text-[18px] mobile:text-[18px]`,
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
        <div className="flex flex-row items-center">
          <i
            onClick={prevSong}
            className="icon-Previous cursor-pointer text-gray-300
         hover:text-white text-[24px] mini-laptop:text-[20px] 
          tablet:text-[20px] mobile:text-[20px] laptop:text-[22px]"
          ></i>
          <div className="mx-6 scale-100 hover:scale-110">
            {!isPlaying ? (
              <div
                onClick={playPause}
                className="bg-white text-black 
                rounded-full p-1 text-center h-14 w-14 flex 
                items-center justify-center
                cursor-pointer 
                mini-laptop:h-10 mini-laptop:w-10
                tablet:h-10 tablet:w-10
                mobile:h-10 mobile:w-10
                laptop:w-12 laptop:h-12"
              >
                <Image
                  priority
                  src="/svgs/play.svg"
                  width={40}
                  height={40}
                  alt="play"
                />
              </div>
            ) : (
              <div
                onClick={playPause}
                className="bg-white rounded-full p-1
                text-center h-14 w-14 flex
                items-center justify-center
                cursor-pointer mini-laptop:h-10
                tablet:h-10 tablet:w-10
                mobile:h-10 mobile:w-10
                mini-laptop:w-10 laptop:w-12 laptop:h-12"
              >
                <Image
                  priority
                  src="/svgs/pause.svg"
                  width={40}
                  height={40}
                  alt="play"
                />
              </div>
            )}
          </div>

          <i
            onClick={nextSong}
            className="icon-Next cursor-pointer text-gray-300
          hover:text-white text-[24px]
            mini-laptop:text-[20px]
            tablet:text-[20px]
            mobile:text-[20px]
            laptop:text-[22px]"
          ></i>
        </div>

        <div className="flex flex-col items-center ml-6 mr-2">
          <i
            onClick={onRepeat}
            className={classNames(
              "icon-repeat mini-laptop:text-[18px] laptop:text-[20px] tablet:text-[18px] mobile:text-[18px]",
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
  return (
    <div
      className="flex flex-row justify-center 
    items-center mb-2 tablet:justify-end"
    >
      <div className="flex flex-col items-center mr-6 mobile:hidden">
        <i
          className={classNames(
            `icon-shuffle text-[14px]`,
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
        className="icon-Previous cursor-pointer text-gray-300 text-[14px]
         hover:text-white mobile:hidden"
      ></i>
      <div className="mx-6 scale-100 hover:scale-110">
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
        className="icon-Next cursor-pointer text-gray-300
         hover:text-white mobile:hidden text-[14px]"
      ></i>

      <div className="flex flex-col items-center mx-6 mobile:hidden">
        <i
          onClick={onRepeat}
          className={classNames(
            "icon-repeat text-[14px]",
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
