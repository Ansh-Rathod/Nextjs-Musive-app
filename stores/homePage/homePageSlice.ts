import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import homePageApi from "./homePageApi";
import { Artists } from "../../interfaces/artist";
import { TrackProps } from "../../interfaces/Track";

export enum RequestStatus {
  Loading,
  Error,
  Success,
  Initial,
}
export interface HomePageState {
  recentUsers: Artists[];
  topHits: TrackProps[];
  popularHits: TrackProps[];
  status: RequestStatus;
}
const initialState: HomePageState = {
  recentUsers: [],
  topHits: [],
  popularHits: [],
  status: RequestStatus.Initial,
};
const homePageSlice = createSlice({
  name: "homePage",
  initialState: initialState,
  reducers: {
    reset: () => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getRecentUsers.pending, (state, action) => {
      state.status = RequestStatus.Loading;
    });
    builder.addCase(getRecentUsers.fulfilled, (state, action) => {
      state.status = RequestStatus.Success;
      state.recentUsers = action.payload.randomArtists;
      state.topHits = action.payload.topHits;
      state.popularHits = action.payload.popular;
    });
    builder.addCase(getRecentUsers.rejected, (state, action) => {
      state.status = RequestStatus.Error;
    });
  },
});

export const getRecentUsers = createAsyncThunk("homePage/random", async () => {
  const data = await homePageApi.getRandomArtists();
  return data;
});

export const { reset } = homePageSlice.actions;
export default homePageSlice.reducer;
