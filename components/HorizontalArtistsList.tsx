import { useRouter } from "next/router";
import ScrollContainer from "react-indiana-drag-scroll";
import { Artists } from "../interfaces/artist";
import HorizontalArtistCard from "./HorizontalArtistsCard";
function HorizontalArtistsList({ artists }: { artists: Artists[] }) {
  const router = useRouter();
  return (
    <ScrollContainer
      horizontal={true}
      vertical={false}
      className="flex flex-row"
    >
      <div className="mx-4 mobile:mx-2 tablet:mx-3 mini-laptop:mx-2"></div>
      {artists.map((artist: Artists) => (
        <HorizontalArtistCard
          key={artist.id}
          artist={artist}
          onClick={() => router.push(`/artist/${artist.id}`)}
        />
      ))}
    </ScrollContainer>
  );
}

export default HorizontalArtistsList;
