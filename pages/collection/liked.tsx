import React from "react";
import API_URL from "@/configs/apiUrl";
import axios from "axios";
import AppLayout from "@/layouts/appLayout";
import { TrackProps } from "@/interfaces/Track";
import ListItem from "@/components/ListItem";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { playPause, setActiveSong } from "@/stores/player/currentAudioPlayer";
import ErrorComponent from "@/components/error";
import { shadeColor } from "@/configs/utils";
import CustomImage from "@/components/CustomImage";
import NavBar from "@/components/backButton";

function Liked({
  data,
  tracks,
  success,
}: {
  success: boolean;
  data: any;
  tracks: TrackProps[];
}) {
  const artist = data;
  const router = useRouter();
  const dispatch = useDispatch();
  const { isPlaying, playingPlaylist } = useSelector(
    (state: any) => state.player
  );
  const [srcollPosition, setScrollPosition] = useState(0);
  const [isScrolling, setScrolling] = useState(false);

  const onScroll = (e: any) => {
    setScrolling(true);
    setScrollPosition(e.target.scrollTop);
  };
  setTimeout(() => {
    setScrolling(false);
  }, 100);
  if (!success) {
    return (
      <AppLayout>
        <ErrorComponent />
      </AppLayout>
    );
  }
  return (
    <AppLayout title="Liked Tracks" color="#48338c" onScroll={onScroll}>
      <NavBar
        condition={srcollPosition >= 300}
        color={"#48338c"}
        title="Liked Tracks"
      />

      <div
        className="bg-[#48338c] h-[350px] pt-20 px-8
       flex items-center mobile:flex-col mobile:h-full 
       tablet:flex-col tablet:h-full mobile:pt-12 tablet:pt-14
       tablet:text-center tablet:pb-3 mobile:pb-3 mobile:text-center"
      >
        <h1 className="text-[30px] font-ProximaBold  leading-[5rem] mobile:block tablet:block hidden">
          Liked Tracks
        </h1>
        <div
          className="w-fit bg-opacity-70 rounded bg-gradient-to-tl to-[#4C17F3] from-[#ddd7d7]
         p-16 flex items-center mr-6 tablet:p-14 tablet:mr-0 mobile:mr-0 mobile:p-10"
        >
          <i className="icon-heart text-[100px]"></i>
        </div>
        <div>
          <p className="uppercase font-ProximaBold text-sm tablet:hidden mobile:hidden">
            Collection
          </p>
          <h1
            className="text-[70px] font-ProximaBold  leading-[5rem] 
          mini-laptop:text-[65px] tablet:hidden mobile:hidden"
          >
            Liked Tracks
          </h1>
          <p className="font-ProximaBold text-sm mt-6 tablet:mt-4 opacity-70">
            {tracks.length} Tracks
          </p>
        </div>
      </div>
      <div
        className="pt-6 px-6 tablet:px-6 mobile:px-4 min-h-[500px]"
        style={{
          background: `linear-gradient(180deg, ${shadeColor(
            "#48338c",
            -30
          )} 0%, rgba(18,18,18,1) 15%)`,
        }}
      >
        <div className="px-6 mobile:px-1">
          <div className="w-full flex justify-between mb-2">
            <div
              onClick={() => {
                if (!isPlaying && playingPlaylist !== "LIKED") {
                  dispatch(
                    setActiveSong({
                      tracks: tracks,
                      index: 0,
                      playlist: "LIKED",
                    })
                  );
                } else {
                  dispatch(playPause(!isPlaying));
                }
              }}
              className="bg-[#2bb540] rounded-full cursor-pointer hover:scale-110
                     w-[45px] h-[45px] flex justify-center items-center"
            >
              {playingPlaylist !== "LIKED" ? (
                <i className="icon-play text-[20px] ml-1 text-black " />
              ) : !isPlaying ? (
                <i className="icon-play text-[20px] ml-1 text-black" />
              ) : (
                <i className="icon-pause text-[20px] text-black" />
              )}
            </div>
          </div>
        </div>
        <div className="pt-4">
          {tracks.map((e: TrackProps, i: number) => (
            <ListItem
              isScrolling={isScrolling}
              key={e.id}
              track={e}
              showNumber={i + 1}
              onTap={() => {
                dispatch(
                  setActiveSong({
                    tracks: tracks,
                    index: tracks.indexOf(e),
                    playlist: "LIKED",
                  })
                );
              }}
            />
          ))}
        </div>
      </div>

      <div className="pb-32"></div>
    </AppLayout>
  );
}

export async function getServerSideProps(context: any) {
  try {
    const token = JSON.parse(context.req.cookies.user).token;
    const tracks = await axios.get(API_URL + "/liked/tracks", {
      headers: {
        authorization: "Bearer " + token,
      },
    });
    console.log(tracks.data);
    return {
      props: {
        success: true,
        // data: data.data[0],
        tracks: tracks.data.data,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        success: false,
      },
    };
  }
}
export default Liked;
