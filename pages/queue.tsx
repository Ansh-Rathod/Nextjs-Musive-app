import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ListItem from "../components/ListItem";
import { TrackProps } from "../interfaces/Track";
import AppLayout from "../layouts/appLayout";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  reorderQueue,
  setActiveSong,
} from "../stores/player/currentAudioPlayer";
import NoSSRWrapper from "../components/noSSRWrapper";
function Queue() {
  const { tracks, currentIndex } = useSelector((state: any) => state.player);
  const dispatch = useDispatch<any>();

  const onDragHandle = (result: any) => {
    console.log(result);
    if (!result.destination) {
      return;
    }
    const newlist = reorder(result.source.index, result.destination.index);
    dispatch(reorderQueue([...tracks.slice(0, currentIndex + 1), ...newlist]));
  };

  const reorder = (startIndex: number, endIndex: number) => {
    const result = Array.from(tracks.slice(currentIndex + 1));
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };
  return (
    <NoSSRWrapper>
      <AppLayout color="#121212" title="Queue">
        <div className="px-6 pt-10 mobile:px-4">
          <h1 className="text-3xl font-ProximaBold mb-6">Queue</h1>
          <h1 className="text-base text-gray-400 font-ProximaBold mb-2">
            Now Playing
          </h1>
          <ListItem
            onTap={() => {}}
            track={tracks[currentIndex]}
            showNumber={1}
          />
          <h1 className="text-base font-ProximaBold my-5 text-gray-400">
            Next in Queue:
          </h1>
          <DragDropContext onDragEnd={onDragHandle}>
            <Droppable droppableId="droppable">
              {(provided, _) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {tracks
                    .slice(currentIndex + 1)
                    .map((track: TrackProps, i: any) => (
                      <Draggable
                        key={track.id.toString()}
                        index={i}
                        draggableId={track.id.toString()}
                      >
                        {(provided, snapshot) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <ListItem
                              onTap={() =>
                                dispatch(
                                  setActiveSong({
                                    tracks: tracks,
                                    index: tracks.indexOf(track),
                                  })
                                )
                              }
                              track={track}
                              showNumber={i + 2}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <div className="pb-32"></div>
        </div>
      </AppLayout>
    </NoSSRWrapper>
  );
}

export default Queue;
