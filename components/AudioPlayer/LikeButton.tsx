import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unLike } from "../../stores/player/currentAudioPlayer";
import {
  addLike,
  removeLike,
  Like,
} from "../../stores/player/currentAudioPlayer";

function LikeButton({ track_id, size, isList }: any) {
  const [like, setLike] = useState(false);
  const dispatch = useDispatch<any>();
  const { liked } = useSelector((state: any) => state.player);
  const { user } = useSelector((state: any) => state.auth);

  useEffect(() => {
    setLike(liked.includes(track_id));
  }, [track_id, liked, like]);
  return (
    <div
      className={
        isList &&
        (like
          ? "visible"
          : "invisible group-hover:visible mobile:visible tablet:visible")
      }
    >
      {!like ? (
        <i
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addLike({ track_id }));
            setLike(true);
            dispatch(Like({ track_id, token: user?.token }));
          }}
          className={`cursor-pointer icon-Like text-gray-400 
          ${size ? size : "text-[14px]"} mx-2 hover:text-white`}
        ></i>
      ) : (
        <i
          onClick={(e) => {
            e.stopPropagation();

            dispatch(removeLike({ track_id }));
            setLike(false);
            dispatch(unLike({ track_id, token: user?.token }));
          }}
          className={`cursor-pointer icon-heart 
          text-[#2bb540] ${size ? size : "text-[15px]"} mx-2`}
        ></i>
      )}
    </div>
  );
}

export default LikeButton;
