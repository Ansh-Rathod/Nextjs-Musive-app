/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Link from "next/link";

const Home: NextPage = () => {
  const { status, user } = useSelector((state: any) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/home");
    }
  }, [router, user, status]);

  return (
    <div>
      Musive landing page! work stil in progress.
      <ul>
        <li className="text-blue-800 underline">
          <Link href="/login">
            <a>login</a>
          </Link>
        </li>
        <li className="text-blue-800 underline">
          <Link href="/register">
            <a>register</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
