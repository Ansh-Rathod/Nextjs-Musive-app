import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ListItem from "../components/ListItem";
import { TrackProps } from "../interfaces/Track";
import AppLayout from "../layouts/appLayout";
import { setActiveSong } from "../stores/player/currentAudioPlayer";
function Queue() {
  const { tracks } = useSelector((state: any) => state.player);
  const dispatch = useDispatch();
  return (
    <AppLayout color="#121212" title="Queue">
      <div className="px-6 pt-10">
        <h1 className="text-3xl font-ProximaBold mb-6">Queue</h1>
        {tracks.map((track: TrackProps, i: any) => {
          return (
            <ListItem
              onTap={() =>
                dispatch(
                  setActiveSong({
                    tracks: tracks,
                    index: tracks.indexOf(track),
                  })
                )
              }
              key={track.id}
              track={track}
              showNumber={i + 1}
            />
          );
        })}
      </div>
    </AppLayout>
  );
}

export default Queue;
