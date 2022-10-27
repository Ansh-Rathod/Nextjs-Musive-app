import Link from "next/link";
import React from "react";
import SidebarItem from "../components/sidebarItem";
import Image from "next/image";
import Head from "next/head";

function AppLayout({ children, title }: any) {
  return (
    <div>
      <Head>
        <title>{title + " | Musive"}</title>
      </Head>
      <div className="font-ProximaRegular text-white bg-[#121212]">
        <div className="flex flex-row h-screen">
          <div className="w-[14rem] bg-black p-3 border-r-[#242424] border-r">
            <Link href="/">
              <div className="flex flex-row items-center px-3 mt-2 select-none cursor-pointer">
                <Image src="/logo.jpeg" width={40} height={40} alt="logo" />
                <h1
                  className="text-center uppercase mx-2 text-md 
                 tracking-wider font-ProximaBold"
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
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
