import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { toggleModel } from "@/stores/player/currentAudioPlayer";
import { useState } from "react";
import {
  addTrackToCollection,
  createNewCollection,
} from "../stores/player/currentAudioPlayer";

function AddToCollectionModel() {
  const { isModelOpen, collections, passedDataToModel } = useSelector(
    (state: any) => state.player
  );

  const { user } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch<any>();
  const model = useRef(null);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState([]);
  useEffect(() => {
    if (!isModelOpen) return;
    function handleClick(event: any) {
      // @ts-ignore-comment
      if (model.current && !model.current.contains(event.target)) {
        dispatch(toggleModel({ data: false, track_id: "" }));
      }
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModelOpen]);
  return (
    <div>
      {isModelOpen && (
        <div className="fixed inset-0 w-full h-full bg-black z-40 bg-opacity-50 flex items-center justify-center">
          <div ref={model} className="w-80 rounded-md bg-[#2a2a2a]">
            <p className="font-ProximaBold px-3 pt-3 pb-1.5 text-gray-400">
              Add to collection:
            </p>
            <div className="rounded-md p-2.5 flex item-center justify-center flex-row">
              <div className="rounded-tl-md rounded-bl-md bg-[#4a4a4a] flex items-center px-2">
                <i className="icon-search text-white text-[20px] opacity-70"></i>
              </div>

              <input
                type="search"
                onChange={(e) => {
                  console.log(e);
                  if (e.target.value.length !== 0) {
                    setShowResults(true);
                    setResults(
                      collections.filter((col: any) =>
                        col.name.toLowerCase().match(e.target.value)
                      )
                    );
                  } else {
                    setShowResults(false);
                  }
                }}
                placeholder="Find collections.."
                className="w-full px-0 py-1.5 outline-0 border-none
                 text-white bg-[#4a4a4a] rounded-tr-md rounded-br-md"
              />
            </div>
            <div className="px-3">
              <div
                onClick={() => {
                  dispatch(
                    createNewCollection({
                      token: user.token,
                      name: "Collection #" + passedDataToModel,
                      track_id: passedDataToModel,
                    })
                  );
                  dispatch(toggleModel({ data: false, track_id: "" }));
                }}
                className="font-ProximaBold  hover:bg-[#464646] px-2 py-2 text-white rounded"
              >
                <p> Create collection</p>
              </div>

              <div className="border-b border-slate-700 py-1"></div>
              <div className="h-[400px] overflow-y-scroll scroll">
                {!showResults ? (
                  <div>
                    {collections.map((e: any) => (
                      <div
                        className="font-ProximaRegular tracking-wide text-[15px] hover:bg-[#4a4a4a] px-2 py-2 text-slate-200 rounded cursor-pointer"
                        key={e.id}
                        onClick={() => {
                          dispatch(
                            addTrackToCollection({
                              token: user.token,
                              collection_id: e.id,
                              track_id: passedDataToModel,
                            })
                          );
                          dispatch(toggleModel({ data: false, track_id: "" }));
                        }}
                      >
                        {e.name}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    {results.map((e: any) => (
                      <div
                        className="font-ProximaRegular tracking-wide text-[15px] hover:bg-[#4a4a4a] px-2 py-2 text-slate-200 rounded cursor-pointer"
                        key={e.id}
                        onClick={() => {
                          dispatch(
                            addTrackToCollection({
                              token: user.token,
                              collection_id: e.id,
                              track_id: passedDataToModel,
                            })
                          );
                          dispatch(toggleModel({ data: false, track_id: "" }));
                        }}
                      >
                        {e.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddToCollectionModel;
