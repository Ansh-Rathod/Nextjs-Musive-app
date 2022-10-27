import type { NextPage } from "next";

import { useLogin } from "../hooks/isLoggedIn";
import AppLayout from "../layouts/appLayout";
import { createRef } from "react";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
const Home: NextPage = () => {
  // useLogin();

  return (
    <AppLayout title="Home">
      <p>Home page</p>
    </AppLayout>
  );
};

export default Home;
