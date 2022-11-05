/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";

import { useLogin } from "../hooks/isLoggedIn";
import AppLayout from "../layouts/appLayout";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Artists } from "../interfaces/artist";
import {
  getRecentUsers,
  HomePageState,
  RequestStatus,
} from "../stores/homePage/homePageSlice";
import CustomImage from "../components/CustomImage";
import HorizontalTracksList from "../components/HorizontalTracksList";

const Home: NextPage = () => {
  // useLogin();
  const { recentUsers, status, topHits, popularHits }: HomePageState =
    useSelector((state: any) => state.homePage);
  const dispatch = useDispatch<any>();
  const [color, setColor] = useState("#121212");
  useEffect(() => {
    if (status !== RequestStatus.Success) {
      dispatch(getRecentUsers());
    }
    if (status == RequestStatus.Success) {
      setColor(recentUsers[0].avatar.color);
    }
  }, []);

  return (
    <AppLayout title="Home" color={color}>
      {status == RequestStatus.Loading ? (
        <div> loading...</div>
      ) : status == RequestStatus.Error ? (
        <div>error</div>
      ) : status == RequestStatus.Success ? (
        <div className="mt-10 mini-laptop:mt-2 mobile:mt-1">
          <h1 className="pt-6 px-6 mobile:px-4 pb-6 text-3xl font-ProximaBold mini-laptop:text-2xl tablet:text-2xl mobile:text-xl">
            Good Morning
          </h1>
          <div
            className="px-6 mobile:px-4 grid grid-cols-3 gap-x-6 gap-y-5 mini-laptop:gap-x-3 
          mini-laptop:gap-y-4 tablet:gap-y-4 tablet:gap-x-3 mobile:grid-cols-2 mobile:gap-x-3 mobile:gap-y-3"
          >
            {recentUsers.map((e: Artists) => (
              <div
                key={e.id}
                onMouseEnter={() => setColor(e.avatar.color)}
                onMouseLeave={() => setColor(recentUsers[0].avatar.color)}
                className="flex flex-row items-center
                      font-ProximaBold w-full bg-[#5f5d5d60]
                      rounded-md shadow-[#121212a9] cursor-pointer hover:bg-[#5f5d5da1]"
              >
                <div
                  style={{
                    backgroundColor: e.avatar.color,
                    boxShadow:
                      "10px 0 10px -7px rgba(18, 18, 18, 0.50), -0px 0 0px -4px rgba(0, 0, 0, 0)",
                  }}
                  className="relative w-20 h-20 mini-laptop:w-16 mini-laptop:h-16
                        rounded-tl-md rounded-bl tablet:w-16 tablet:h-16 mobile:w-14 mobile:h-14"
                >
                  <CustomImage
                    src={e.avatar.urls.thumb}
                    className="rounded-tl rounded-bl shadow-2xl shadow-black"
                  />
                </div>
                <p className="p-4 mini-laptop:p-2 tablet:p-2 tablet:text-[15px] mobile:p-0 mobile:px-2 mobile:text-[14px]">
                  {e.display_name}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <h1 className="px-6 mobile:px-4 text-xl font-ProximaBold mb-6 mobile:text-base">
              Top Hits this Week
            </h1>
            <HorizontalTracksList tracks={topHits} />
          </div>
          <div className="mt-6">
            <h1 className="px-6 mobile:px-4 text-xl font-ProximaBold mb-6 mobile:text-base">
              Popluar releases
            </h1>
            <HorizontalTracksList tracks={popularHits} />
          </div>
        </div>
      ) : null}
    </AppLayout>
  );
};

export default Home;
