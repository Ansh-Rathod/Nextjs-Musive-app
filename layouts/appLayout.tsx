import Link from "next/link";
import React from "react";
import SidebarItem from "../components/sidebarItem";
import Image from "next/image";
import Head from "next/head";
import { useLogin } from "../hooks/useLogin";

function AppLayout({ children, title, color, onScroll }: any) {
  useLogin();
  return (
    <div>
      <Head>
        <title>{"Musive / " + title}</title>
      </Head>
      <div className="font-ProximaRegular text-white bg-[#121212]">
        <div className="flex flex-row h-screen w-screen max-w-full">
          <div
            className="w-[14rem] mini-laptop:w-[55px] bg-black p-3
           border-r-[#242424] border-r mini-laptop:p-0 tablet:hidden mobile:hidden"
          >
            <Link href="/">
              <div className="flex flex-row items-center px-3 mt-2 select-none cursor-pointer">
                <div className="mini-laptop:mt-4 relative w-[40px] h-[40px] mini-laptop:w-[30px]">
                  <Image
                    src="/logo.jpeg"
                    layout="fill"
                    objectFit="contain"
                    alt="logo"
                  />
                </div>

                <h1
                  className="text-center uppercase mx-2 text-md 
                 tracking-wider font-ProximaBold mini-laptop:hidden"
                >
                  Musive
                </h1>
              </div>
            </Link>

            <div className="px-4 mt-8">
              <SidebarItem name="home" label="Home" />
              <SidebarItem name="search" label="Search" />
              <SidebarItem name="library" label="Your Library" />
              <div className="my-6 border-b border-slate-800 "></div>
              <div
                className="group select-none cursor-pointer mt-4 flex flex-row items-center 
               mini-laptop:hidden tablet:hidden mobile:hidden"
              >
                <i className="icon-create_new text-[26px] opacity-70 mr-3 group-hover:opacity-100"></i>

                <p className="group-hover:opacity-100 text-white opacity-70">
                  Create Collection
                </p>
              </div>
              <div
                className=" mini-laptop:hidden tablet:hidden mobile:hidden group select-none cursor-pointer mt-4 flex flex-row items-center 
               mini-laptop:w-full mini-laptop:mt-6 mobile:mt-0 tablet:mt-0 mobile:mx-8 tablet:mx-10"
              >
                <div className="opacity-70 group-hover:opacity-100 rounded bg-gradient-to-tl to-[#4C17F3] from-[#ddd7d7] px-2 py-2 flex items-center mr-3">
                  <i className="icon-heart text-[12px]"></i>
                </div>

                <p className="group-hover:opacity-100 text-white opacity-70">
                  Liked Tracks
                </p>
              </div>
            </div>
          </div>
          <div
            onScroll={onScroll}
            className="h-screen scroll overflow-y-scroll transition-colors"
            style={{
              background: `linear-gradient(180deg, ${color} 0%, rgba(18,18,18,1) 60%)`,
            }}
          >
            <div
              className=" bg-gradient-to-t from-[#121212]
                 via-[#121212f0] to-[#12121298] w-full transition-colors"
            >
              <div
                className="w-[calc(100vw_-_14rem)] 
                 mini-laptop:w-[calc(100vw_-_55px)] tablet:w-screen mobile:w-screen"
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
