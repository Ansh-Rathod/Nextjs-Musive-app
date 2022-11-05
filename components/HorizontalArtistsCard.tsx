import React from "react";
import CustomImage from "./CustomImage";
import { TrackProps } from "../interfaces/Track";
import { Artists } from "../interfaces/artist";

function HorizontalArtistCard({
  artist,
  onClick,
}: {
  artist: Artists;
  onClick: () => void;
}) {
  return (
    <div key={artist.id} className="mr-4 cursor-grab" onClick={onClick}>
      <div
        className="p-4 bg-gradient-to-t from-[#2c2a2a4a] to-[#2c2a2ac7] hover:bg-[#4340409d]
           tablet:hover:bg-transparent mobile:hover:bg-transparent
           rounded-md h-full mini-laptop:p-3 tablet:p-0 tablet:from-transparent tablet:to-transparent
           mobile:from-transparent mobile:to-transparent mobile:p-0
           "
      >
        <div
          style={{
            background: artist.avatar.color,
            boxShadow:
              "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
          }}
          className="w-[160px] h-[160px] relative rounded-full 
          mini-laptop:w-[140px] mini-laptop:h-[140px] 
          tablet:w-[130px] tablet:h-[130px] mobile:w-[100px] mobile:h-[100px]"
        >
          <CustomImage
            src={artist.avatar.urls.small}
            className="rounded-full"
          />
        </div>
        <p className="line-clamp-2 mobile:text-center tablet:text-center mt-4 font-ProximaBold text-base mobile:text-sm tablet:text-sm">
          {artist.display_name}
        </p>
        <p
          className="line-clamp-2 mt-0.5 text-sm text-gray-400 
            font-ProximaRegular mobile:text-xs tablet:text-xs
            mobile:text-center tablet:text-center "
        >
          Artist
        </p>
      </div>
    </div>
  );
}

export default HorizontalArtistCard;
