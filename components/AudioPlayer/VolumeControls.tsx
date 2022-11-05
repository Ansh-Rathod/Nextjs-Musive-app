import React from "react";

interface IProps {
  volume: number;
  updateVolume: (e: any) => void;
  isFullScreen: boolean;
}

function VolumeControls({ volume, updateVolume, isFullScreen }: IProps) {
  const currentPercentage = 1 ? `${(volume / 1) * 100}%` : "0%";
  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `;
  if (isFullScreen) {
    return (
      <div
        className="flex flex-row justify-center 
      items-center group transition-all"
      >
        {volume <= 1 && volume > 0.5 && (
          <i
            className="cursor-pointer icon-volume-2
            text-gray-400 hover:text-white text-[22px] mobile:text-[18px]"
            onClick={() => updateVolume(0)}
          ></i>
        )}
        {volume <= 0.5 && volume > 0 && (
          <i
            className=" cursor-pointer icon-volume-1
            text-gray-400 hover:text-white text-[22px] mobile:text-[18px]"
            onClick={() => updateVolume(0)}
          ></i>
        )}
        {volume === 0 && (
          <i
            style={{ fontSize: "20px" }}
            className="cursor-pointer icon-volume-x
            text-gray-400 hover:text-white text-[22px] mobile:text-[18px]"
            onClick={() => updateVolume(1)}
          ></i>
        )}
        <input
          type="range"
          value={volume}
          step="any"
          min={0}
          max={1}
          style={{ background: trackStyling }}
          className="max-h-1 cursor-pointer  w-[6rem] bg-gray-600
           mx-2 hidden group-hover:block"
          onChange={(e) => updateVolume(e.target.value)}
        />
      </div>
    );
  }
  return (
    <div className="flex flex-row justify-center items-center ml-1">
      {volume <= 1 && volume > 0.5 && (
        <i
          className="cursor-pointer icon-volume-2 text-gray-400 hover:text-white"
          onClick={() => updateVolume(0)}
        ></i>
      )}
      {volume <= 0.5 && volume > 0 && (
        <i
          className="cursor-pointer icon-volume-1 text-gray-400 hover:text-white"
          onClick={() => updateVolume(0)}
        ></i>
      )}
      {volume === 0 && (
        <i
          className="cursor-pointer icon-volume-x text-gray-400 hover:text-white"
          onClick={() => updateVolume(1)}
        ></i>
      )}
      <input
        type="range"
        value={volume}
        step="any"
        min={0}
        max={1}
        style={{ background: trackStyling }}
        className="max-h-1 cursor-pointer w-[8rem] bg-gray-600 mx-2
            mini-laptop:w-[4rem]"
        onChange={(e) => updateVolume(e.target.value)}
      />
    </div>
  );
}

export default VolumeControls;
