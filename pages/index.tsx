/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Home: NextPage = () => {
  const { status, user } = useSelector((state: any) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/home");
    }
  }, [router, user, status]);

  return <div> landing page</div>;
};

export default Home;
