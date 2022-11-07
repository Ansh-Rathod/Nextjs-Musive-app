import { TrackProps } from "../interfaces/Track";
import CustomImage from "./CustomImage";
import "swiper/css";

import ScrollContainer from "react-indiana-drag-scroll";
import { useDispatch } from "react-redux";
import { setActiveSong } from "../stores/player/currentAudioPlayer";

import HorizontalTrackCard from "./HorizontalTrackCard";
function HorizontalTracksList({ tracks }: { tracks: TrackProps[] }) {
  const dispatch = useDispatch();

  return (
    <ScrollContainer
      vertical={false}
      horizontal={true}
      className="flex flex-row"
    >
      <div className="mx-4 mobile:mx-2 tablet:mx-6"></div>
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
