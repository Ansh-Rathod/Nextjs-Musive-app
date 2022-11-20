import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TrackProps } from "@/interfaces/Track";
import ApiService from "./ApiServices";

const tracks: TrackProps[] = [
  {
    id: 115479,
    duration: 139.493875,
    track_name: "Crazy Energy",
    src: "https://cdn.pixabay.com/audio/2022/07/23/audio_5cf955aff9.mp3",
    cover_image: {
      url: "https://images.unsplash.com/photo-1635007920037-fde83e0d8dc4?ixid=MnwzNzM5Nzh8MHwxfHNlYXJjaHw3NTB8fGFsYnVtfGVufDB8fHx8MTY2NjMyOTM3Nw&ixlib=rb-4.0.3",

      color: "#73c0d9",
    },
    artist_name: "Veronica Homenick",
    artist_id: 22579021,
  },
];
export enum LikedStatus {
  Initial,
  success,
  error,
}
export enum CollectionsStatus {
  Initial,
  success,
  error,
}
export enum CreateCollectionStatus {
  waiting,
  done,
  Initial,
  error,
}
export interface IStateProps {
  tracks: TrackProps[];
  liked: number[];
  currentIndex: number;
  showBanner: boolean;
  isPlaying: boolean;
  activeSong: TrackProps | null;
  trackProgress: number;
  isShuffle: boolean;
  isRepeat: boolean;
  collections: [];
  createCollectionStatus: CreateCollectionStatus;
  isModelOpen: boolean;
  playingPlaylist: string;
  fetchlikedStatus: LikedStatus;
  collectionStatus: CollectionsStatus;
  passedDataToModel: object;
}

const initialState: IStateProps = {
  tracks: tracks,
  currentIndex: 0,
  isModelOpen: false,
  playingPlaylist: "",
  liked: [],
  collections: [],
  fetchlikedStatus: LikedStatus.Initial,
  createCollectionStatus: CreateCollectionStatus.Initial,

  collectionStatus: CollectionsStatus.Initial,
  passedDataToModel: {},
  isShuffle: false,
  isRepeat: false,
  showBanner: false,
  isPlaying: false,
  activeSong: tracks[0],
  trackProgress: 0,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.showBanner = true;
      state.tracks = action.payload.tracks;
      state.currentIndex = action.payload.index;
      state.activeSong = action.payload.tracks[action.payload.index];
      if (action.payload.playlist) {
        state.playingPlaylist = action.payload.playlist;
      } else {
        state.playingPlaylist = "";
      }
    },

    nextSong: (state, action) => {
      state.currentIndex = action.payload;
      state.activeSong = state.tracks[action.payload];
    },
    onShuffle: (state, action) => {
      state.isShuffle = action.payload;
    },
    onRepeat: (state, action) => {
      state.isRepeat = action.payload;
    },
    setTrackProgress: (state, action) => {
      state.trackProgress = action.payload;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
    addLike: (state, action) => {
      let liked = [...state.liked, action.payload.track_id];
      state.liked = liked;
    },
    removeLike: (state, action) => {
      let liked = state.liked.filter(
        (value: number) => value != action.payload.track_id
      );
      state.liked = liked;
    },
    reorderQueue: (state, action) => {
      state.tracks = action.payload;
    },
    addToQueue: (state, action) => {
      state.tracks.splice(state.currentIndex + 1, 0, action.payload);
      state.tracks = state.tracks;
    },
    removeFromQueue: (state, action) => {
      if (action.payload > -1) {
        state.tracks.splice(action.payload, 1);
      }
      state.tracks = state.tracks;
    },

    toggleModel: (state, action) => {
      state.isModelOpen = action.payload.data;
      state.passedDataToModel = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addTrackToCollection.fulfilled, (state, action) => {
      const collection = state.collections.find(
        (e: any) => e.id == action.payload.collection_id
      );

      //@ts-ignore
      if (collection) collection.total_tracks = collection.total_tracks + 1;
      state.collections = state.collections;
    });
    builder.addCase(getLikedSongs.fulfilled, (state, action) => {
      state.fetchlikedStatus = LikedStatus.success;
      state.liked = action.payload.data;
    });
    builder.addCase(getCollections.fulfilled, (state, action) => {
      state.collectionStatus = CollectionsStatus.success;
      state.collections = action.payload.data;
    });
    builder.addCase(createNewCollection.pending, (state, action) => {
      state.createCollectionStatus = CreateCollectionStatus.waiting;
    });
    builder.addCase(createNewCollection.rejected, (state, action) => {
      state.createCollectionStatus = CreateCollectionStatus.error;
    });
    builder.addCase(renameCollection.fulfilled, (state, action) => {
      const collection = state.collections.find(
        (e: any) => e.id == action.payload!.collection_id
      );
      if (collection)
        // @ts-ignore
        collection.name = action.payload!.collection_name;

      state.collections = state.collections;
    });
    builder.addCase(deleteCollection.fulfilled, (state, action) => {
      const collections = state.collections.filter(
        (e: any) => e.id !== action.payload!.collection_id
      );
      //@ts-ignore
      state.collections = collections;
    });
    builder.addCase(createNewCollection.fulfilled, (state, action) => {
      let collections = state.collections;
      // @ts-ignore
      collections.push(action.payload.data[0]);
      state.collections = collections;
      state.createCollectionStatus = CreateCollectionStatus.done;
    });
    builder.addCase(getCollections.rejected, (state, action) => {
      state.collectionStatus = CollectionsStatus.error;
    });
    builder.addCase(getLikedSongs.rejected, (state, action) => {
      state.fetchlikedStatus = LikedStatus.error;
    });
  },
});

export const getLikedSongs = createAsyncThunk(
  "ApiServices/idsOflikedSongs",
  async (token: string, thunkAPI) => {
    try {
      return await ApiService.idsOflikedTracks(token);
    } catch (error) {
      // console.log(error);
    }
  }
);
export const getCollections = createAsyncThunk(
  "ApiServices/getCollections",
  async (token: string, thunkAPI) => {
    try {
      return await ApiService.getCollections(token);
    } catch (error) {
      // console.log(error);
    }
  }
);
export const Like = createAsyncThunk(
  "ApiServices/addlike",
  async ({ track_id, token }: any, thunkAPI) => {
    try {
      return await ApiService.like({
        track_id,
        token,
      });
    } catch (error) {
      // console.log(error);
    }
  }
);
export const unLike = createAsyncThunk(
  "ApiServices/removelike",
  async ({ track_id, token }: any, thunkAPI) => {
    try {
      return await ApiService.unLike({
        track_id,
        token,
      });
    } catch (error) {
      // console.log(error);
    }
  }
);
export const addTrackToCollection = createAsyncThunk(
  "ApiServices/addTrackToCollection",
  async ({ collection_id, track_id, token }: any, thunkAPI) => {
    try {
      return await ApiService.addTrackToCollection(token, {
        collection_id,
        track_id,
      });
    } catch (error) {
      // console.log(error);
    }
  }
);
export const removeTrackFromCollection = createAsyncThunk(
  "ApiServices/removeTrackFromCollection",
  async ({ collection_id, track_id, token }: any, thunkAPI) => {
    try {
      return await ApiService.removeTrackFromCollection(token, {
        collection_id,
        track_id,
      });
    } catch (error) {
      // console.log(error);
    }
  }
);
export const createNewCollection = createAsyncThunk(
  "ApiServices/createNewCollection",
  async ({ name, track_id, token }: any, thunkAPI) => {
    try {
      return await ApiService.createNewCollection(token, {
        name,
        track_id,
      });
    } catch (error) {
      // console.log(error);
    }
  }
);
export const renameCollection = createAsyncThunk(
  "ApiServices/renameCollection",
  async ({ collection_id, collection_name, token }: any, thunkAPI) => {
    try {
      return await ApiService.renameCollection(token, {
        collection_id,
        collection_name,
      });
    } catch (error) {
      // console.log(error);
    }
  }
);

export const deleteCollection = createAsyncThunk(
  "ApiServices/deleteCollection",
  async ({ collection_id, token }: any, thunkAPI) => {
    try {
      return await ApiService.deleteCollection(token, {
        collection_id,
      });
    } catch (error) {
      // console.log(error);
    }
  }
);

export const {
  setActiveSong,
  nextSong,
  playPause,
  onShuffle,
  addToQueue,
  onRepeat,
  setTrackProgress,
  removeFromQueue,
  addLike,
  removeLike,
  toggleModel,
  reorderQueue,
} = playerSlice.actions;

export default playerSlice.reducer;
