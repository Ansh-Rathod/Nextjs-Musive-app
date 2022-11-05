import React from "react";
import Controls from "./Controls";
import SeekBar from "./SeekBar";
import VolumeControls from "./VolumeControls";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import {
  onRepeat,
  onShuffle,
  playPause,
} from "../../stores/player/currentAudioPlayer";
import { TrackProps, CoverImage } from "../../interfaces/Track";
import Link from "next/link";
import CustomImage from "../CustomImage";

interface IProps {
  trackProgress: number;
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
  activeSong: TrackProps;
  onScrubEnd: () => void;
  onScrub: (e: any) => void;
  trackBarStyling: any;
  isShuffle: boolean;
  isRepeat: boolean;
  isPlaying: boolean;
  toPrevTrack: () => void;
  toNextTrack: () => void;
  updateVolume: (e: any) => void;
  volume: number;
  trackStyling: any;
  changeSeekBarColor: (e: any) => void;
}

function FullScreenPlayer({
  activeSong,
  trackProgress,
  audioRef,
  onScrubEnd,
  trackStyling,
  onScrub,
  isShuffle,
  isRepeat,
  isPlaying,
  toPrevTrack,
  toNextTrack,
  changeSeekBarColor,
  updateVolume,
  volume,
}: IProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <div
      style={{ backgroundColor: activeSong!.cover_image.color }}
      className="font-ProximaRegular
        fixed bottom-0 left-0 right-0 top-0 
        select-none overflow-hidden h-screen w-screen max-w-full"
    >
      <div
        className="bg-gradient-to-t from-[#121212]
           via-[#1a1919b8] to-[#0000006b]
          w-full h-full"
      >
        <div
          className="backdrop-blur-[100px] w-full h-full flex flex-row 
            items-center justify-center
            tablet:block mobile:block"
        >
          <div
            className="w-screen m-auto  flex flex-row 
              justify-center items-center tablet:items-start mobile:items-start"
          >
            <FullScreenCoverImage
              activeSong={activeSong}
              className="tablet:hidden mobile:hidden"
            />
            <div
              className="flex flex-col h-[450px] laptop:h-[400px] mini-laptop:h-[400px]
              justify-between items-center px-6 py-2 tablet:mt-4 mobile:mt-4
              mobile:h-screen"
            >
              <div
                className="flex flex-row justify-between items-center
                text-white font-ProximaBold tablet:w-[400px] 
                mobile:w-[340px] w-full tablet:mb-8 mobile:mb-"
              >
                <div
                  onClick={() => router.back()}
                  className="w-8 h-8 bg-[#616161] hover:bg-white hover:text-black text-gray-100 shadow flex 
                    items-center justify-center rounded-full cursor-pointer mobile:w-6 mobile:h-6"
                >
                  <i className="icon-close text-[14px] mobile:text-[12px]"></i>
                </div>
                <div className="flex flex-row items-center">
                  <h1
                    className="text-center uppercase mx-2 
                      tracking-wider font-ProximaBold mini-laptop:text-base tablet:text-base mobile:text-base"
                  >
                    Now Playing
                  </h1>
                </div>
                <div
                  className="w-8 h-8 shadow flex 
                    items-center justify-center rounded-full cursor-pointer"
                >
                  <i className="icon-share text-[22px] text-gray-400"></i>
                </div>
              </div>
              <FullScreenCoverImage
                activeSong={activeSong}
                className="hidden tablet:block mobile:block tablet:my-4 tablet:mb-6 mobile:mb-6 mobile:my-4"
              />
              <div className="flex flex-col justify-center items-center mobile:pb-14">
                <div
                  className="mb-10 mini-laptop:w-[320px] laptop:w-[350px] desktop:w-[28rem]
                    w-full tablet:w-[400px] mobile:w-[320px] flex flex-row justify-between items-center"
                >
                  <div>
                    <p
                      className="text-gray-300 hover:underline font-ProximaBold
                        cursor-pointer line-clamp-1 mobile:text-sm text-lg mini-laptop:text-base 
                        tablet:text-base"
                    >
                      {activeSong!.track_name}
                    </p>
                    <Link href={`/artist/${activeSong.artist_id}`}>
                      <p
                        className="text-gray-400 text-sm mini-laptop:text-sm
                       tablet:text-sm mobile:text-xs hover:underline cursor-pointer"
                      >
                        {activeSong.artist_name}
                      </p>
                    </Link>
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center">
                    <i className="icon-Like text-gray-400 hover:text-white"></i>
                  </div>
                </div>
                <div>
                  <SeekBar
                    changeSeekBarColor={changeSeekBarColor}
                    isFullScreen={true}
                    trackProgress={trackProgress}
                    audioRef={audioRef}
                    activeSong={activeSong!}
                    onScrubEnd={onScrubEnd}
                    onScrub={onScrub}
                    trackBarStyling={trackStyling}
                  />
                  <Controls
                    isFullScreen={true}
                    isShuffle={isShuffle}
                    isRepeat={isRepeat}
                    onRepeat={() => dispatch(onRepeat(!isRepeat))}
                    onShuffle={() => dispatch(onShuffle(!isShuffle))}
                    playPause={() => dispatch(playPause(!isPlaying))}
                    isPlaying={isPlaying}
                    nextSong={toNextTrack}
                    prevSong={toPrevTrack}
                  />
                </div>

                <div
                  className="flex flex-row justify-between mt-10 w-full 
                  tablet:w-[400px] mobile:w-[320px]"
                >
                  <VolumeControls
                    isFullScreen={true}
                    updateVolume={updateVolume}
                    volume={volume}
                  />
                  <div>
                    <i
                      className="icon-share text-gray-400 text-[20px]
                hover:text-white cursor-pointer mx-3 mobile:text-[14px]"
                    ></i>
                    <i
                      className="icon-queue text-gray-400 text-[18px]
                hover:text-white cursor-pointer ml-3 mobile:text-[14px]"
                    ></i>
                  </div>
                </div>
              </div>
              <div className="hidden mobile:block tablet:block h-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FullScreenCoverImage({ activeSong, className }: any) {
  return (
    <div
      style={{
        backgroundColor: activeSong!.cover_image.color,
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
      className={
        `w-[450px] h-[450px] min-w-[450px]
        relative mx-10 mini-laptop:mx-4
        laptop:w-[400px] laptop:h-[400px] laptop:min-w-[400px]
        tablet:w-[400px] tablet:h-[400px] tablet:min-w-[400px] tablet:min-h-[400px]
        mobile:w-[320px] mobile:h-[320px] mobile:min-w-[320px] mobile:min-h-[320px]
        mini-laptop:w-[370px] mini-laptop:h-[370px] 
        mini-laptop:min-w-[370px] rounded-md ` + className
      }
    >
      <CustomImage
        src={activeSong!.cover_image.urls.regular}
        className="rounded-md shadow-2xl"
      />
    </div>
  );
}
export default FullScreenPlayer;
