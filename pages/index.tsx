/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import Image from "next/image";
import CustomImage from "@/components/CustomImage";
import classnames from "classnames";
const Home: NextPage = () => {
  const { status, user } = useSelector((state: any) => state.auth);
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/home");
    }
  }, [router, user, status]);

  return (
    <div className="font-ProximaRegular bg-[#121212] text-white">
      <div className="fixed top-0 left-0 right-0 z-40 bg-[#121212]">
        <div className="flex flex-row max-w-[1280px] justify-between items-center mx-auto p-2">
          <div className="flex flex-row items-center">
            <Image priority src="/logo.png" width={40} height={40} alt="logo" />
            <h1
              className="text-center uppercase mx-2 
              tracking-wider font-ProximaBold"
            >
              Musive
            </h1>
          </div>
          <div className="flex">
            <Link href={"/login"}>
              <div className="cursor-pointer mx-2 hover:underline text-slate-200 hover:text-white">
                <p>Login</p>
              </div>
            </Link>
            <Link href={"/register"}>
              <div className="cursor-pointer mx-2 hover:underline text-slate-200 hover:text-white">
                <p>Sign up</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative">
        <div
          className="overflow-hidden pt-36 pb-20 mobile:pb-16  w-full 
        flex justify-center items-center "
        >
          <div
            className="cliped w-[600px] h-[300px] bg-[#2bb540]
          bg-gradient-to-r from-[#2bb] via-[#2bb540] to-yellow-200
           bg-opacity-80"
          ></div>
        </div>
        <div
          className="bg-[#121212] bg-opacity-40 pt-36 pb-20 mobile:pb-16 backdrop-blur-[50px] 
        absolute z-10 inset-0 max-w-[1280px] mx-auto 
         flex justify-center flex-col items-center"
        >
          <h1
            className="text-[70px] font-ProximaBold text-center
           leading-[5rem] mini-laptop:text-[60px] tablet:text-[50px] mini-laptop:leading-[4rem]
            tablet:leading-[4rem] mobile:text-[35px] mobile:leading-[2.5rem]"
          >
            Download & use Free
            <br /> Music anywhere!
          </h1>
          <p className="text-center mt-4 max-w-[600px] mx-auto text-[18px] px-8">
            Explore & download free stock music and use it anywhere you like
            with spotify web player experience.
          </p>
          <Link href={"/register"}>
            <div className="cursor-pointer shadow-md px-5 py-2 rounded-3xl mt-6 bg-[#2bb540] w-fit">
              Get started
            </div>
          </Link>
        </div>
      </div>
      <div>
        <div
          className=" bg-[#121212]  backdrop-blur-[50px] 
      max-w-[1280px] mx-auto mobile:hidden"
        >
          <div className="max-w-[1000px] mx-auto">
            <Image
              src={"/landing_page.png"}
              objectFit="contain"
              width="1000"
              height="500"
              layout="responsive"
              className="rounded-md noDrag m-0 p-0"
              alt="image"
            />
          </div>
        </div>
        <div className="overflow-hidden pl-10">
          <div className="hidden mobile:block relative h-[400px] w-[600px]">
            <Image
              src={"/landing_page.png"}
              objectFit="contain"
              layout="fill"
              className="rounded-md noDrag m-0 p-0"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
