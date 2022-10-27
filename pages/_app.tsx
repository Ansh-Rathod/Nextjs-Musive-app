import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider, useSelector } from "react-redux";
import store from "../stores/store";
import NextNProgress from "nextjs-progressbar";
import { useRouter } from "next/router";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";

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
  const { showBanner } = useSelector((state: any) => state.player);
  return (
    <div>
      {router.pathname !== "/login" && router.pathname !== "/register" ? (
        <AudioPlayer />
      ) : (
        <div></div>
      )}
    </div>
  );
}
export default MyApp;
