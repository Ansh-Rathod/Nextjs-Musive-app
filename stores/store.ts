import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import audioPlayer from "./player/currentAudioPlayer";
import homePageSlice from "./homePage/homePageSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    player: audioPlayer,
    homePage: homePageSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
