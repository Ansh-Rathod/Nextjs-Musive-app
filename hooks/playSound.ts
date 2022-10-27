import { useEffect, useState } from "react";

const useAudio = (url: string) => {
  const [audio] = useState(
    typeof Audio !== "undefined" ? new Audio(url) : null
  );

  const [playing, setPlaying] = useState<boolean>(false);
  const [seekTime, setSeekTime] = useState<number>(0);

  const [appTime, setAppTime] = useState<number>(0);
  const toggle = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    playing ? audio!.play() : audio!.pause();
  }, [audio, playing]);

  useEffect(() => {
  
    audio!.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio!.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return [
    playing,
    toggle,
    setPlaying,
    seekTime,
    setSeekTime,
    appTime,
    setAppTime,
  ];
};

export default useAudio;
