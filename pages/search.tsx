import React from "react";
import AppLayout from "../layouts/appLayout";
import algoliaClient from "../configs/algolia";
import { toTrackProps, TrackProps, CoverImage } from "../interfaces/Track";
import { useState } from "react";
import CustomImage from "../components/CustomImage";
import { Artists, tracksToArtists } from "../interfaces/artist";
import HorizontalArtistsList from "../components/HorizontalArtistsList";
import { tags } from "../interfaces/genres";
import { useDispatch, useSelector } from "react-redux";
import { setActiveSong } from "../stores/player/currentAudioPlayer";
import { PlayPauseButton } from "../components/HorizontalTrackCard";
import LikeButton from "../components/AudioPlayer/LikeButton";
import ListItem from "../components/ListItem";

function Search() {
  const [searchResult, setSearchResult] = useState<TrackProps[]>([]);
  const [artists, setArtists] = useState<Artists[]>([]);
  const [topResult, setTopResult] = useState<any>();
  const [isFocus, setFocus] = useState(false);
  const dispatch = useDispatch();

  // get response from algolia
  const searchAlgolia = async (query: string) => {
    if (query.length == 0) {
      setFocus(false);
      return;
    }
    setFocus(true);
    const data = await algoliaClient.search(query);
    if (data.hits.length !== 0) {
      // @ts-ignore comment

      if (data.hits[0]._highlightResult!.track_name.matchLevel == "full") {
        setTopResult({
          type: "track",
          ...data.hits[0],
        });
      } else if (
        // @ts-ignore comment
        data.hits[0]._highlightResult!.artist_name.matchLevel == "full"
      ) {
        setTopResult({
          type: "artist",
          ...data.hits[0],
        });
      } else {
        setTopResult({
          type: "track",
          ...data.hits[0],
        });
      }
    }
    setArtists(removeDuplicate(tracksToArtists(data.hits)));
    setSearchResult(toTrackProps(data.hits));
  };

  const removeDuplicate = (array: any) => {
    let dups: any[] = [];
    var newArray = array.filter(function (el: any) {
      if (dups.indexOf(el.id) == -1) {
        dups.push(el.id);
        return true;
      }

      return false;
    });
    return newArray;
  };

  return (
    <AppLayout title="Search" color="#121212">
      <div className="w-full">
        <div
          className="py-4 px-6 mobile:py-2 mobile:px-4 tablet:px-4 fixed z-10 bg-[#121212] flex flex-row 
        w-[calc(100vw_-_14rem_-_5px)] mini-laptop:w-[calc(100vw_-_55px_-_5px)] 
        tablet:w-screen mobile:w-screen border-b-[#242424] border-b items-center
        "
        >
          <div className="items-center flex bg-white rounded-3xl px-4 mobile:rounded-md tablet:w-full mobile:w-full">
            <i className="icon-search text-gray-500"></i>
            <input
              onChange={(e: any) => searchAlgolia(e.target.value)}
              type="text"
              className="tablet:w-full mobile:w-full w-[300px] pr-6 mobile:pr-8 pl-2 py-2 text-black border-none outline-none rounded-3xl"
              placeholder="Search Music.."
            />
          </div>
        </div>
      </div>

      {isFocus ? (
        <div>
          <div className="pt-24 mobile:pt-14 tablet:pt-14"></div>

          <div
            className="flex px-8 mini-laptop:px-4 
          justify-items-stretch items-stretch tablet:flex-col mobile:flex-col mobile:px-4 tablet:px-6"
          >
            <div className="laptop:w-[26rem] w-[32rem] tablet:w-full mobile:w-full">
              <h1 className="mobile:hidden tablet:hidden my-4 text-xl font-ProximaBold">
                Top Result
              </h1>

              {topResult && (
                <TopResult
                  object={topResult}
                  onTap={() =>
                    dispatch(setActiveSong({ tracks: searchResult, index: 0 }))
                  }
                />
              )}
            </div>
            <div className="w-full ml-6 tablet:m-0 tablet:mt-2 mobile:mt-2 mobile:ml-0">
              <h1 className="my-4 text-xl font-ProximaBold">Top Tracks</h1>

              {searchResult.slice(0, 4).map((track: TrackProps, i: number) => {
                return (
                  <ListItem
                    onTap={() =>
                      dispatch(
                        setActiveSong({ tracks: searchResult, index: i })
                      )
                    }
                    key={track.id}
                    track={track}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="font-ProximaBold px-8 mini-laptop:px-4 py-6 text-xl">
              Related Artists
            </h1>
            <HorizontalArtistsList artists={artists} />
          </div>
          <div className="px-8 mini-laptop:px-4 mobile:px-4 tablet:px-4">
            <h1 className="font-ProximaBold py-6 text-xl ml-3"> Top Tracks</h1>
            {searchResult.slice(4).map((track: TrackProps, i: any) => {
              return (
                <ListItem
                  onTap={() =>
                    dispatch(
                      setActiveSong({
                        tracks: searchResult,
                        index: searchResult.indexOf(track),
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
        </div>
      ) : (
        <div>
          <div className="pt-28 mobile:pt-20 tablet:pt-20"></div>

          <h1 className="mobile:text-xl text-2xl font-ProximaBold px-8 mini-laptop:px-4 mobile:px-4 ">
            Browse all
          </h1>
          <div
            className="grid grid-cols-5 laptop:grid-cols-4 mini-laptop:grid-cols-3 mini-laptop:gap-4
           laptop:gap-4 gap-6 px-8 laptop:px-6 mini-laptop:px-4
            pt-4 select-none tablet:grid-cols-2 mobile:grid-cols-2 mobile:px-4 mobile:gap-4"
          >
            {tags.map((tag: any) => {
              return (
                <div
                  key={tag.tag}
                  className="hover:scale-105 transition-all cursor-pointer relative h-44 tablet:h-40 mobile:h-28 overflow-hidden rounded-md "
                  style={{ backgroundColor: "#" + tag.color.toString(16) }}
                >
                  <div className="p-4 capitalize">
                    <p className="font-ProximaBold text-xl">{tag.tag}</p>
                    <div className="absolute -right-4 -bottom-2">
                      <div className="shadow-xl relative mobile:w-[70px] rounded mobile:h-[70px] w-24 h-24 rotate-[30deg]">
                        <CustomImage
                          src={tag.coverImage}
                          className="rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="mb-32"></div>
    </AppLayout>
  );
}
export default Search;

function TopResult({ object, onTap }: any) {
  const [showPlayButton, setPlayButton] = useState(false);

  const { activeSong, isPlaying } = useSelector((state: any) => state.player);

  if (object.type == "track") {
    return (
      <div
        onClick={onTap}
        onMouseEnter={() => setPlayButton(true)}
        onMouseLeave={() => setPlayButton(false)}
        className="mobile:hidden tablet:hidden h-[250px] flex flex-col bg-[#5f5d5d2f] relative
              hover:bg-[#5f5d5d72] rounded-md tablet:h-full mobile:h-full"
      >
        <div>
          {activeSong.id === object.id ? (
            <PlayPauseButton
              condition={activeSong.id === object.id}
              isPlaying={isPlaying}
            />
          ) : showPlayButton ? (
            <PlayPauseButton
              condition={showPlayButton}
              isHover
              isPlaying={isPlaying}
            />
          ) : null}
          <div className="p-6 tablet:flex mobile:flex ">
            <div
              className="rounded-md relative w-24 h-24 "
              style={{
                backgroundColor: object.cover_image.color,
                boxShadow:
                  "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
              }}
            >
              <CustomImage
                src={object.cover_image.urls.small}
                className="rounded-md"
              />
            </div>
            <div className="tablet:mx-4 mobile:mx-4">
              <p className="mt-4 text-2xl font-ProximaBold line-clamp-1">
                {object.track_name}
              </p>
              <p>{object.artist_name}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className=" mobile:hidden tablet:hidden h-[250px] flex flex-col p-6 bg-[#5f5d5d2f] 
              hover:bg-[#5f5d5d72] rounded-md tablet:h-full mobile:h-full"
      >
        <div
          className="rounded-full relative w-24 h-24"
          style={{
            backgroundColor: object.avatar.color,
            boxShadow:
              "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
          }}
        >
          <CustomImage
            src={object.avatar.urls.small}
            className="rounded-full"
          />
        </div>

        <p className="mt-4 text-2xl font-ProximaBold line-clamp-1">
          {object.artist_name}
        </p>
        <p>Artist</p>
      </div>
    );
  }
}
