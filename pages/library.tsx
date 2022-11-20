import React, { useState } from "react";
import AppLayout from "@/layouts/appLayout";
import NavBar from "@/components/backButton";
import { useSelector } from "react-redux";
import CustomImage from "@/components/CustomImage";
import Image from "next/image";
import Link from "next/link";

function Library() {
  const [srcollPosition, setScrollPosition] = useState(0);
  const { liked, collections } = useSelector((state: any) => state.player);
  const onScroll = (e: any) => {
    setScrollPosition(e.target.scrollTop);
  };

  return (
    <AppLayout title="Your Library" color="#2bb540" onScroll={onScroll}>
      <NavBar
        condition={srcollPosition >= 200}
        color="#333333"
        title="Library"
      />
      <div className="w-full min-h-[1000px] px-6 pt-24 mobile:px-4 ">
        <h1 className="text-[70px] font-ProximaBold text-white mb-5 px-2 mobile:px-0 mobile:text-[40px]">
          Library
        </h1>
        <div
          className="grid grid-rows-1 grid-cols-5 gap-4
         laptop:grid-cols-4 mini-laptop:grid-cols-3 laptop:gap-3 
         tablet:grid-cols-3
         
          mobile:grid-cols-2 mobile:gap-4"
        >
          <Link href="/collection/liked">
            <div
              className="flex flex-col p-3.5cursor-pointer p-3.5 bg-gradient-to-t from-[#2c2a2a4a] to-[#2c2a2ac7] hover:bg-[#4340409d]
           tablet:hover:bg-transparent mobile:hover:bg-transparent 
           rounded-md h-full mini-laptop:p-3 tablet:p-0 tablet:from-transparent tablet:to-transparent
           mobile:from-transparent mobile:to-transparent mobile:p-0 mobile:mr-0
           "
            >
              <div
                className="cursor-pointer  rounded-lg hover:from-[#bdb6d3] hover:to-[#4C17F3]
            bg-gradient-to-tl to-[#4C17F3] from-[#a79ccc]
             flex justify-center items-center w-full h-full 
             tablet:w-full mobile:w-full "
              >
                <i className="icon-heart text-[70px] mobile:text-[70px] laptop:text-[100px]"></i>
              </div>
              <div className="py-3">
                <p className="">Liked tracks</p>
                <p className="text-gray-300 text-sm mt-1">
                  {liked.length} Tracks
                </p>
              </div>
            </div>
          </Link>
          {collections.map((e: any) => {
            return (
              <Link key={e.id} href={`/collection/${e.id}`}>
                <div
                  className="cursor-pointer p-3.5 bg-gradient-to-t from-[#2c2a2a4a] to-[#2c2a2ac7] hover:bg-[#4340409d]
           tablet:hover:bg-transparent mobile:hover:bg-transparent 
           rounded-md h-full mini-laptop:p-3 tablet:p-0 tablet:from-transparent tablet:to-transparent
           mobile:from-transparent mobile:to-transparent mobile:p-0 mobile:mr-0
           "
                >
                  <div
                    style={{ backgroundColor: e.color }}
                    className="p-0 m-0 rounded-md"
                  >
                    <Image
                      src={
                        e.cover_image + "&auto=format&fit=crop&w=400&q=50&h=400"
                      }
                      width="300"
                      height="300"
                      objectFit="cover"
                      layout="responsive"
                      className="rounded-md noDrag m-0 p-0"
                      alt="image"
                    />
                  </div>

                  <div className="py-3">
                    <p className="">{e.name}</p>
                    <p className="text-gray-300 text-sm mt-1">
                      {e.total_tracks} Tracks
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="pb-32"></div>
      </div>
    </AppLayout>
  );
}

export default Library;
