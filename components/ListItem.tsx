import { useSelector } from "react-redux";
import LikeButton from "./AudioPlayer/LikeButton";
import CustomImage from "./CustomImage";

function ListItem({ track, showNumber, onTap }: any) {
  const { activeSong } = useSelector((state: any) => state.player);
  const getTime = (time: any) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;
  return (
    <div
      onClick={onTap}
      className="cursor-pointer hover:bg-[#5f5d5d60] flex flex-row justify-between 
              items-center py-2 w-full rounded-md group mobile:hover:bg-transparent tablet:hover:bg-transparent"
    >
      <div className="flex-grow flex flex-row items-center">
        {showNumber && (
          <p className="mx-2 ml-4 mobile:ml-0 tablet:ml-0">{showNumber}</p>
        )}
        <div>
          <div
            className="relative w-12 h-12 min-w-12 mx-2 mobile:w-10 mobile:h-10"
            style={{ backgroundColor: track.cover_image.color }}
          >
            <CustomImage
              src={track.cover_image.urls.small_s3}
              className="w-12 min-w-12"
            />
          </div>
        </div>

        <div className="">
          <p
            className={`line-clamp-1 ${
              activeSong.id == track.id && "text-[#2bb540] font-ProximaBold"
            }`}
          >
            {track.track_name}
          </p>
          <p className="text-sm text-gray-300">{track.artist_name}</p>
        </div>
      </div>
      <div className="mx-2 flex flex-row items-center">
        <div className="group-hover:visible invisible mobile:visible tablet:visible ">
          <LikeButton track_id={track.id} />
        </div>

        <p className="text-gray-300 text-sm w-[25px] text-right ml-3 mobile:hidden">
          {getTime(track.duration)}
        </p>
        <i
          className="group-hover:visible invisible mobile:visible
         tablet:visible icon-more-horizontal mobile:icon-more-vertical text-[20px] ml-3 text-gray-200"
        ></i>
      </div>
    </div>
  );
}

export default ListItem;
