/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import Link from "next/link";
import { useLogin } from "../hooks/useLogin";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  useLogin();
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
