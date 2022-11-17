import React from "react";
import AppLayout from "@/layouts/appLayout";
import axios from "axios";
import API_URL from "@/configs/apiUrl";
import { Artists } from "@/interfaces/artist";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setActiveSong } from "../../stores/player/currentAudioPlayer";
import { TrackProps } from "@/interfaces/Track";
import ListItem from "@/components/ListItem";
import { tags } from "@/interfaces/genres";
import HorizontalArtistsList from "@/components/HorizontalArtistsList";
import { useState } from "react";
import { capitalize } from "@/configs/utils";
import NavBar from "@/components/backButton";
import ErrorComponent from "@/components/error";

function GenrePage({
  artists,
  tracks,
  tag,
  success,
}: {
  tag: any;
  success: boolean;
  artists: Artists[];
  tracks: TrackProps[];
}) {
  const dispatch = useDispatch();
  const router = useRouter();
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
    <AppLayout
      title={capitalize(tag.tag)}
      color={"#" + tag.color.toString(16)}
      onScroll={onScroll}
    >
      <div>
        <NavBar
          condition={srcollPosition >= 300}
          color={"#" + tag.color.toString(16)}
          title={tag.tag}
        />
      </div>
      <div className="px-10 pt-32 mobile:pt-20 mini-laptop:px-6 tablet:px-6 mobile:px-4">
        <h1
          className="pb-6 text-[70px] laptop:text-[60px] 
            mini-laptop:text-[60px] tablet:text-[45px] mobile:text-[40px] capitalize font-ProximaBold"
        >
          {tag.tag}
        </h1>
        <h4 className="font-ProximaBold pb-6 text-gray-400">
          Related Artists:
        </h4>
      </div>
      <HorizontalArtistsList artists={artists} />
      <div className="px-8 mini-laptop:px-6 tablet:px-6 mobile:px-4">
        <h4 className="pt-8 font-ProximaBold pb-6 text-gray-400">
          Popular Tracks:
        </h4>
        {tracks.map((track: TrackProps, i: number) => {
          return (
            <ListItem
              isScrolling={isScrolling}
              onTap={() => {
                dispatch(setActiveSong({ tracks: tracks, index: i }));
              }}
              key={track.id}
              track={track}
              showNumber={i + 1}
            />
          );
        })}
      </div>
      <div className="pb-32"></div>
    </AppLayout>
  );
}

export async function getServerSideProps(context: any) {
  try {
    const { data } = await axios.get(
      API_URL + "/songs/tag/" + context.params.id
    );
    const tracks = await axios.get(
      API_URL + "/artists/tag/" + context.params.id
    );
    const tag = tags.find((tag: any) => {
      return tag.tag == context.params.id;
    });
    return {
      props: {
        success: true,
        tag: tag,
        tracks: data.data,
        artists: tracks.data.data,
      },
    };
  } catch (e) {
    return {
      props: {
        success: false,
      },
    };
  }
}

export default GenrePage;
