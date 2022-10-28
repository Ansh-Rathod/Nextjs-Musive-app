import React from "react";
import { TrackProps } from "../../interfaces/Track";

interface IProps {
  trackProgress: number;
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
  activeSong: TrackProps;
  onScrubEnd: () => void;
  onScrub: (e: any) => void;
  trackBarStyling: any;
  isFullScreen: boolean;
}
function SeekBar({
  trackProgress,
  audioRef,
  activeSong,
  onScrubEnd,
  onScrub,
  trackBarStyling,
  isFullScreen,
}: IProps) {
  const getTime = (time: any) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;
  if (isFullScreen) {
    return (
      <div
        className="flex flex-row justify-center items-center 
         tablet:w-[400px]
         mobile:w-[320px]
       text-gray-300 text-xs"
      >
        <p className="w-6">
          {audioRef.current ? getTime(trackProgress) : "0:00"}
        </p>

        <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          style={{ background: trackBarStyling }}
          max={activeSong!.duration}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
          className="max-h-1 cursor-pointer w-[24rem] mx-2 laptop:w-[18rem]
          mini-laptop:w-[16rem] 
          "
          onChange={(e) => onScrub(e.target.value)}
        />
        <p className="w-6">{getTime(activeSong!.duration)}</p>
      </div>
    );
  }
  return (
    <div
      className="flex flex-row justify-center items-center 
          tablet:justify-end
       text-gray-300 text-xs mobile:hidden"
    >
      <p className="w-6">
        {audioRef.current ? getTime(trackProgress) : "0:00"}
      </p>

      <input
        type="range"
        value={trackProgress}
        step="1"
        min="0"
        style={{ background: trackBarStyling }}
        max={activeSong!.duration}
        onMouseUp={onScrubEnd}
        onKeyUp={onScrubEnd}
        className="max-h-1 cursor-pointer w-[26rem] laptop:w-[20rem]
             bg-gray-600 mx-2 mini-laptop:w-[16rem] tablet:w-[16rem]"
        onChange={(e) => onScrub(e.target.value)}
      />
      <p className="w-6">{getTime(activeSong!.duration)}</p>
    </div>
  );
}

export default SeekBar;
