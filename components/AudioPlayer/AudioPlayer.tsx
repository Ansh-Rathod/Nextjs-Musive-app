/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  IStateProps,
  nextSong,
  onRepeat,
  onShuffle,
  playPause,
  setTrackProgress,
} from "../../stores/player/currentAudioPlayer";
import { useEffect } from "react";
import Controls from "./Controls";
import Image from "next/image";

function AudioPlayer() {
  const {
    isPlaying,
    activeSong,
    currentIndex,
    trackProgress,
    tracks,
    isShuffle,
    isRepeat,
  }: IStateProps = useSelector((state: any) => state.player);
  const dispatch = useDispatch();
  const audioRef = useRef(
    typeof Audio !== "undefined" ? new Audio(activeSong!.src) : null
  );
  const isReady = useRef(false);
  const [volume, setVolume] = useState(0.5);
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>();

  useEffect(() => {
    if (isPlaying) {
      audioRef.current!.play();
      startTimer();
    } else {
      audioRef.current!.pause();
    }
  }, [isPlaying]);

  const toNextTrack = () => {
    if (tracks.length - 1 !== currentIndex) {
      dispatch(nextSong(currentIndex + 1));
    }
  };
  const toPrevTrack = () => {
    if (currentIndex !== 0) {
      dispatch(nextSong(currentIndex - 1));
    }
  };

  useEffect(() => {
    audioRef.current!.pause();

    audioRef.current = new Audio(activeSong!.src);
    dispatch(setTrackProgress(audioRef.current.currentTime));
    audioRef.current.volume = volume;

    if (isReady.current) {
      audioRef.current.play();
      dispatch(playPause(true));
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [activeSong, currentIndex]);

  const onScrub = (value: any) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current!.currentTime = value;
    dispatch(setTrackProgress(audioRef.current!.currentTime));
  };

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current!.ended) {
        toNextTrack();
      } else {
        dispatch(setTrackProgress(audioRef.current!.currentTime));
      }
    }, 1000);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      dispatch(playPause(true));
    }
    startTimer();
  };

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current!.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  // get formated time in 0:00
  const getTime = (time: any) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

  // update volume function
  const updateVolume = (e: any) => {
    setVolume(e);
    audioRef.current!.volume = e;
  };
  return (
    <div
      className="font-ProximaRegular flex flex-row 
      items-center justify-between 
    bg-[#121212]  w-screen max-w-full 
      fixed bottom-0 left-0 right-0 py-3 px-4 pb-4
     border-t-[#242424] border-t
      select-none"
    >
      <div className="flex flex-row items-center w-full ">
        <Image
          src={activeSong!.cover_image.urls.small}
          alt="album"
          width={55}
          height={55}
          className="rounded-sm mx-3  "
          unoptimized
        />
        <div className="mx-4">
          <p className="text-gray-300 hover:underline cursor-pointer line-clamp-1 ">
            {activeSong!.name}
          </p>
          <p className="text-gray-400 text-sm">Ansh Rathod</p>
        </div>
        <i className="icon-Like text-gray-400 mr-6 ml-2 text-[16px]"></i>
      </div>

      <div>
        <Controls
          isShuffle={isShuffle}
          isRepeat={isRepeat}
          onRepeat={() => dispatch(onRepeat(!isRepeat))}
          onShuffle={() => dispatch(onShuffle(!isShuffle))}
          playPause={() => dispatch(playPause(!isPlaying))}
          isPlaying={isPlaying}
          nextSong={toNextTrack}
          prevSong={toPrevTrack}
        />
        <div
          className="flex flex-row justify-center items-center
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
            max={activeSong!.duration}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
            className="max-h-1 cursor-pointer w-[26rem] bg-gray-600 mx-2"
            onChange={(e) => onScrub(e.target.value)}
          />
          <p className="w-6">{getTime(activeSong!.duration)}</p>
        </div>
      </div>
      <div className="w-full flex flex-row justify-end items-end">
        <div className="flex flex-row items-center">
          <i
            className="icon-share text-gray-400 text-[16px]
           hover:text-white cursor-pointer mx-2"
          ></i>
          <i
            className="icon-queue text-gray-400 text-[14px]
           hover:text-white cursor-pointer mx-2"
          ></i>
          {volume <= 1 && volume > 0.5 && (
            <i
              className=" cursor-pointer icon-volume text-gray-400 hover:text-white"
              onClick={() => updateVolume(0)}
            ></i>
          )}
          {volume <= 0.5 && volume > 0 && (
            <i
              className=" cursor-pointer icon-volume text-gray-400 hover:text-white"
              onClick={() => updateVolume(0)}
            ></i>
          )}
          {volume === 0 && (
            <i
              className="  cursor-pointer icon-mute text-gray-400 hover:text-white"
              onClick={() => updateVolume(1)}
            ></i>
          )}
          <input
            type="range"
            value={volume}
            step="any"
            min={0}
            max={1}
            className="max-h-1 cursor-pointer w-[8rem] bg-gray-600 mx-2"
            onChange={(e) => updateVolume(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
