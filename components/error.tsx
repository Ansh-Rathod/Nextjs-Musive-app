import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

function ErrorComponent() {
  const router = useRouter();
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="p-4 w-[500px] flex flex-col text-center justify-center items-center">
        <h1 className="mobile:text-[30px] mobile:leading-8 text-[40px] font-ProximaBold leading-[3rem] my-4">
          Oppsie,
          <br /> Something went wrong!
        </h1>
        <p>
          Some technical issue occurred on our side, contact{" "}
          <Link href="https://github.com/Ansh-Rathod">
            <a className="text-[#2bb540] underline">Ansh Rathod</a>
          </Link>{" "}
          Or try to reload the page.
        </p>

        <div
          onClick={() => router.reload()}
          className="select-none cursor-pointer font-ProximaBold mt-6 w-52 bg-[#2bb540] p-2 text-center rounded-3xl"
        >
          Try Again
        </div>
      </div>
    </div>
  );
}

export default ErrorComponent;
