import { TrackProps } from "../interfaces/Track";
import CustomImage from "./CustomImage";
import "swiper/css";

import ScrollContainer from "react-indiana-drag-scroll";
import { useDispatch, useSelector } from "react-redux";
import { playPause, setActiveSong } from "../stores/player/currentAudioPlayer";
import Image from "next/image";
import useState from "react";
import HorizontalTrackCard from "./HorizontalTrackCard";
function HorizontalTracksList({ tracks }: { tracks: TrackProps[] }) {
  const dispatch = useDispatch();

  return (
    <ScrollContainer className="flex flex-row">
      <div className="mx-3 mobile:mx-2"></div>
      {tracks.map((track: TrackProps) => (
        <HorizontalTrackCard
          key={track.id}
          track={track}
          onClick={() =>
            dispatch(
              setActiveSong({
                index: tracks.indexOf(track),
                tracks: tracks,
              })
            )
          }
        />
      ))}
    </ScrollContainer>
  );
}

export default HorizontalTracksList;
