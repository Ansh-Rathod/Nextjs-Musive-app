import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";

function Playing() {
  const { activeSong } = useSelector((state: any) => state.player);
  return (
    <div>
      <Head>
        <title>{"Playing " + activeSong!.name + " | Musive"}</title>
      </Head>
      Hehe LOL you need to figure out by your self!
    </div>
  );
}

export default Playing;
