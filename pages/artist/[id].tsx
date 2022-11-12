import React from "react";
import AppLayout from "../../layouts/appLayout";
import axios from "axios";
import API_URL from "../../configs/apiUrl";
import CustomImage from "../../components/CustomImage";
import { Artists } from "../../interfaces/artist";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  playPause,
  setActiveSong,
} from "../../stores/player/currentAudioPlayer";
import { TrackProps } from "../../interfaces/Track";
import ListItem from "../../components/ListItem";
import HorizontalTracksList from "../../components/HorizontalTracksList";

function ArtistProfile({
  data,
  tracks,
}: {
  data: Artists;
  tracks: TrackProps[];
}) {
  const artist = data;
  const router = useRouter();
  const dispatch = useDispatch();
  const { isPlaying } = useSelector((state: any) => state.player);

  function getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return (
    <AppLayout title={data.display_name} color={artist.avatar.color}>
      <div>
        <div
          className="absolute px-8 py-4 z-20 mobile:px-4 tablet:px-6 mini-laptop:px-7
          w-[calc(100vw_-_14rem)] mini-laptop:w-[calc(100vw_-_55px)] 
        tablet:w-screen mobile:w-screen overflow-x-hidden
          "
        >
          <div
            onClick={() => router.back()}
            className="w-fit bg-black  text-center 
            flex items-center justify-center rounded-full px-1 bg-opacity-25 hover:bg-opacity-50 cursor-pointer"
          >
            <i className="icon-arrow_back text-[20px] text-center pl-2 py-2 "></i>
          </div>
        </div>
      </div>

      <div
        className="relative w-full h-[400px]  mobile:h-[350px]"
        style={{ backgroundColor: artist.avatar.color }}
      >
        <div className="flex flex-col justify-end absolute w-full h-full bg-black bg-opacity-40 z-10">
          <div
            className="px-10 pb-10 mobile:pb-6 tablet:pb-6 mobile:px-4 
                      tablet:px-6 mini-laptop:px-7"
          >
            <div className="flex">
              <i className="icon-verified mr-2 text-blue-300"></i>
              <p>@{artist.display_name.replaceAll(" ", "").toLowerCase()}</p>
            </div>
            <h1
              className="text-[70px] font-ProximaBold laptop:text-[60px] 
            mini-laptop:text-[60px] tablet:text-[45px] mobile:text-[40px]"
            >
              {artist.display_name}
            </h1>
            <p>
              {getRndInteger(20000000, 500000000).toLocaleString()} monthly
              downloads
            </p>
          </div>
        </div>

        <CustomImage src={artist.avatar.urls.regular} />
      </div>
      <div
        style={{
          background: `linear-gradient(180deg, ${artist.avatar.color} 0%, rgba(18,18,18,1) 15%)`,
        }}
      >
        <div
          className="h-full bg-gradient-to-t from-[#121212]
                 via-[#121212f0] to-[#12121298] w-full transition-colors
                  px-8 pt-6 mini-laptop:px-6 tablet:px-6 mobile:px-4"
        >
          <div
            onClick={() => dispatch(playPause(!isPlaying))}
            className="bg-[#2bb540] rounded-full cursor-pointer hover:scale-110
                     w-[45px] h-[45px] flex justify-center items-center mobile:w-[30px] mobile:h-[30px]"
          >
            {!isPlaying ? (
              <i className="icon-play text-[20px] ml-1 text-black mobile:text-[16px]" />
            ) : (
              <i className="icon-pause text-[20px] text-black mobile:text-[16px]" />
            )}
          </div>

          <div className="pt-6">
            <h1 className="text-2xl font-ProximaBold">Popular</h1>
            <div className="max-w-[700px] pt-4">
              {tracks.slice(0, 5).map((e: TrackProps, i: number) => (
                <ListItem
                  key={e.id}
                  track={e}
                  showNumber={i + 1}
                  onTap={() => {
                    dispatch(
                      setActiveSong({
                        tracks: tracks,
                        index: tracks.indexOf(e),
                      })
                    );
                  }}
                />
              ))}
            </div>
          </div>
          <div className="pt-6">
            <h1 className="text-2xl font-ProximaBold pb-6">Older Releases</h1>
          </div>
        </div>
        <HorizontalTracksList tracks={tracks.slice(5, 15)} />
        <div className="pt-6 px-8 tablet:px-6 mobile:px-4">
          <h1 className="text-2xl font-ProximaBold">All</h1>
          <div className="pt-4">
            {tracks.slice(15).map((e: TrackProps, i: number) => (
              <ListItem
                key={e.id}
                track={e}
                showNumber={i + 1}
                onTap={() => {
                  dispatch(
                    setActiveSong({
                      tracks: tracks,
                      index: tracks.indexOf(e),
                    })
                  );
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="pb-32"></div>
    </AppLayout>
  );
}

export async function getServerSideProps(context: any) {
  try {
    const { data } = await axios.get(API_URL + "/artists/" + context.params.id);
    const tracks = await axios.get(
      API_URL + "/songs/artist/" + context.params.id
    );
    return {
      props: {
        success: true,
        data: data.data[0],
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

export default ArtistProfile;
