import "swiper/css";

import ScrollContainer from "react-indiana-drag-scroll";
import { Artists } from "../interfaces/artist";
import HorizontalArtistCard from "./HorizontalArtistsCard";
function HorizontalArtistsList({ artists }: { artists: Artists[] }) {
  return (
    <ScrollContainer horizontal vertical={false} className="flex flex-row">
      <div className="mx-3 mobile:mx-2"></div>
      {artists.map((artist: Artists) => (
        <HorizontalArtistCard
          key={artist.id}
          artist={artist}
          onClick={() => {}}
        />
      ))}
    </ScrollContainer>
  );
}

export default HorizontalArtistsList;
