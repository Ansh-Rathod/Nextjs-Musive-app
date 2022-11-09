import Link from "next/link";
import React from "react";
import SidebarItem from "../components/sidebarItem";
import Image from "next/image";
import Head from "next/head";
import { useLogin } from "../hooks/useLogin";

function AppLayout({ children, title, color }: any) {
  useLogin();
  return (
    <div>
      <Head>
        <title>{"Musive - " + title}</title>
      </Head>
      <div className="font-ProximaRegular text-white bg-[#121212]">
        <div className="flex flex-row h-screen ">
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
            </div>
          </div>
          <div
            className="h-screen scroll overflow-y-scroll transition-all"
            style={{
              background: `linear-gradient(180deg, ${color} 0%, rgba(18,18,18,1) 60%)`,
            }}
          >
            <div
              className=" bg-gradient-to-t from-[#121212]
                 via-[#121212f0] to-[#12121298] w-full"
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
