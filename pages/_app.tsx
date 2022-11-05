import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider, useSelector } from "react-redux";
import store from "../stores/store";
import NextNProgress from "nextjs-progressbar";
import { useRouter } from "next/router";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
import SidebarItem from "../components/sidebarItem";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextNProgress color="#2bb540" options={{ showSpinner: false }} />
      <Component {...pageProps} />
      <AudioPlayerComponent />
    </Provider>
  );
}

function AudioPlayerComponent() {
  const router = useRouter();
  return (
    <div>
      {router.pathname !== "/login" &&
      router.pathname !== "/register" &&
      router.pathname !== "/_error" &&
      router.pathname !== "/" ? (
        <AudioPlayer />
      ) : (
        <div></div>
      )}
      {router.pathname !== "/login" &&
        router.pathname !== "/register" &&
        router.pathname !== "/_error" &&
        router.pathname !== "/playing" &&
        router.pathname !== "/" && (
          <div
            className="bg-[#121212] hidden mobile:block tablet:block 
      fixed bottom-0 left-0 right-0 w-full pt-2 pb-1 z-20"
          >
            <div className="flex flex-row justify-center ">
              <SidebarItem name="home" label="Home" />
              <SidebarItem name="search" label="Search" />
              <SidebarItem name="library" label="Library" />
            </div>
          </div>
        )}
    </div>
  );
}
export default MyApp;
