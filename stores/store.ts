import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import audioPlayer from "./player/currentAudioPlayer";
const store = configureStore({
  reducer: {
    auth: authSlice,
    player: audioPlayer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
