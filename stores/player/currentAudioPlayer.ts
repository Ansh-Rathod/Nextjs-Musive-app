import { createSlice } from "@reduxjs/toolkit";
import { TrackProps } from "../../interfaces/Track";

const tracks: TrackProps[] = [
  {
    cover_image: {
      unsplash_photo_id: "U5fTKJAC6xM",
      color: "#735940",
      blur_hash: "LmG7I.V_EO%0%0bHazs.10t5$$Rl",
      urls: {
        raw: "https://images.unsplash.com/photo-1634761441066-af14cf2e70ee?ixid=MnwzNzM5Nzh8MHwxfHNlYXJjaHw0MjR8fG1pbmRmdWxuZXNzfGVufDB8fHx8MTY2NjI4MDAxMQ&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1634761441066-af14cf2e70ee?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNzM5Nzh8MHwxfHNlYXJjaHw0MjR8fG1pbmRmdWxuZXNzfGVufDB8fHx8MTY2NjI4MDAxMQ&ixlib=rb-4.0.3&q=80",
        regular:
          "https://images.unsplash.com/photo-1634761441066-af14cf2e70ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzM5Nzh8MHwxfHNlYXJjaHw0MjR8fG1pbmRmdWxuZXNzfGVufDB8fHx8MTY2NjI4MDAxMQ&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1634761441066-af14cf2e70ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzM5Nzh8MHwxfHNlYXJjaHw0MjR8fG1pbmRmdWxuZXNzfGVufDB8fHx8MTY2NjI4MDAxMQ&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1634761441066-af14cf2e70ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzM5Nzh8MHwxfHNlYXJjaHw0MjR8fG1pbmRmdWxuZXNzfGVufDB8fHx8MTY2NjI4MDAxMQ&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1634761441066-af14cf2e70ee",
      },
    },
    id: 118817,
    tags: [
      "children's music",
      "baby songs",
      "kids songs",
      "songs for kids",
      "children songs",
      "kid songs",
      "kids song",
      "kids music",
      "music for kids",
      "children",
      "cocomelon",
      "kid",
      "kids",
      "child",
    ],
    user_id: 22579021,
    user: "Lesfm",
    src: "https://cdn.pixabay.com/audio/2022/09/01/audio_7cb6e7f6f1.mp3",
    download_url:
      "https://cdn.pixabay.com/download/audio/2022/09/01/audio_7cb6e7f6f1.mp3?filename=happy-song-118817.mp3",
    name: "Happy Song",
    duration: 134.478344,
    moods: [
      "Euphoric",
      "Restless",
      "Bright",
      "Happy",
      "Quirky",
      "Uplifting",
      "Funny",
      "Dreamy",
      "Laid Back",
    ],
    genres: ["Happy Childrens Tunes", "Upbeat", "Cartoons"],
    movements: ["Chasing", "Running", "Fast", "Elegant"],
    keywords:
      "children songs, kid songs, fast, vlog music, upbeat, music for kids, children, music for videos, kid, children's music, happy childrens tunes, kids song, elegant, podcast music, bright, cartoons, cocomelon, kids songs, dreamy, kids music, chasing, songs for kids, happy, euphoric, child, running, uplifting, kids, quirky, funny, background music, restless, laid back, music for youtube videos, baby songs",
  },
  {
    cover_image: {
      unsplash_photo_id: "lLt-t98_0xE",
      color: "#c0d9d9",
      blur_hash: "LlI$ECVsj@oK?wW?j[a}x]kDWBa}",
      urls: {
        raw: "https://images.unsplash.com/photo-1629194966610-80c79c1154af?ixid=MnwzNzM5Nzh8MHwxfHNlYXJjaHw0MjV8fG1pbmRmdWxuZXNzfGVufDB8fHx8MTY2NjI4MDAxMQ&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1629194966610-80c79c1154af?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNzM5Nzh8MHwxfHNlYXJjaHw0MjV8fG1pbmRmdWxuZXNzfGVufDB8fHx8MTY2NjI4MDAxMQ&ixlib=rb-4.0.3&q=80",
        regular:
          "https://images.unsplash.com/photo-1629194966610-80c79c1154af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzM5Nzh8MHwxfHNlYXJjaHw0MjV8fG1pbmRmdWxuZXNzfGVufDB8fHx8MTY2NjI4MDAxMQ&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1629194966610-80c79c1154af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzM5Nzh8MHwxfHNlYXJjaHw0MjV8fG1pbmRmdWxuZXNzfGVufDB8fHx8MTY2NjI4MDAxMQ&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1629194966610-80c79c1154af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzM5Nzh8MHwxfHNlYXJjaHw0MjV8fG1pbmRmdWxuZXNzfGVufDB8fHx8MTY2NjI4MDAxMQ&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1629194966610-80c79c1154af",
      },
    },
    id: 15813,
    tags: [
      "trailer",
      "intro",
      "adventure",
      "cinematic",
      "dramatic",
      "emotional",
      "action",
      "background",
      "block buster",
      "energetic",
      "credits",
      "hollywood",
      "stinger",
      "fight",
      "advertising",
    ],
    user_id: 17654080,
    user: "LiteSaturation",
    src: "https://cdn.pixabay.com/audio/2022/01/27/audio_ca2a1900ec.mp3",
    download_url:
      "https://cdn.pixabay.com/download/audio/2022/01/27/audio_ca2a1900ec.mp3?filename=hybrid-trailer-full-version-15813.mp3",
    name: "Hybrid Trailer - Full version",
    duration: 134.426094,
    moods: [
      "Dark",
      "Mysterious",
      "Dreamy",
      "Restless",
      "Epic",
      "Energetic",
      "Suspense",
    ],
    genres: [
      "Main Title",
      "Action",
      "Adventure",
      "Mystery",
      "Electronic",
      "Build Up Scenes",
      "Upbeat",
    ],
    movements: ["Running", "Chasing", "Medium Fast", "Heavy & Ponderous"],
    keywords:
      "main title, adventure, emotional, upbeat, drive, film music, advertising, mystery, music for videos, stinger, trailer, intro, block buster, driving, action, credits, bright, heavy & ponderous, dreamy, build up scenes, chasing, tv, energetic, dark, cinematic music, fighting, pathos, medium fast, cinematic, epic, running, modern, electronic, hollywood, fight, restless, sound track, background, dramatic, promo, suspense, mysterious",
  },
  {
    cover_image: {
      unsplash_photo_id: "DFtjXYd5Pto",
      color: "#f3f3f3",
      blur_hash: "L$IF6.t7M{of~qofWBkCxuj[fkj[",
      urls: {
        raw: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwxfHxtaW5kZnVsbmVzc3xlbnwwfHx8fDE2NjYxNzM1MTg&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwxfHxtaW5kZnVsbmVzc3xlbnwwfHx8fDE2NjYxNzM1MTg&ixlib=rb-4.0.3&q=80",
        regular:
          "https://images.unsplash.com/photo-1499728603263-13726abce5fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwxfHxtaW5kZnVsbmVzc3xlbnwwfHx8fDE2NjYxNzM1MTg&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1499728603263-13726abce5fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwxfHxtaW5kZnVsbmVzc3xlbnwwfHx8fDE2NjYxNzM1MTg&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1499728603263-13726abce5fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwxfHxtaW5kZnVsbmVzc3xlbnwwfHx8fDE2NjYxNzM1MTg&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1499728603263-13726abce5fd",
      },
    },
    id: 122592,
    tags: [
      "background",
      "corporate",
      "promo",
      "soft",
      "tutorial",
      "vlog",
      "vlogging",
      "youtube",
      "music for youtube",
      "background music",
      "good mood",
      "good feel",
      "relaxing",
      "saxophone",
      "laid back",
    ],
    user_id: 29184718,
    user: "DayFox",
    src: "https://cdn.pixabay.com/audio/2022/10/12/audio_061cead49a.mp3",
    download_url:
      "https://cdn.pixabay.com/download/audio/2022/10/12/audio_061cead49a.mp3?filename=weeknds-122592.mp3",
    name: "Weeknds",
    duration: 208.979594,
    moods: [
      "Laid Back",
      "Bright",
      "Dreamy",
      "Romantic",
      "Glamorous",
      "Relaxing",
    ],
    genres: [
      "Beats",
      "Cafe",
      "Alternative Hip Hop",
      "Rnb",
      "Electronic",
      "Beautiful Plays",
    ],
    movements: ["Floating", "Smooth", "Elegant", "Medium"],
    keywords:
      "urban, alternative hip hop, elegant, vlog music, electronic, romantic, background music, vlogging, dreamy, youtube, music for youtube, beats, corporate, rnb, lobby music, vlog, glamorous, cafe, promo, good feel, music for youtube videos, relaxing, music for videos, bright, hip-hop, soft, funk, downbeat, jazz lounge, smooth, medium, tutorial, saxophone, lo-fi, background, low beat, beautiful plays, floating, podcast music, laid back, jazz, good mood",
  },
  {
    cover_image: {
      unsplash_photo_id: "6CLBoiWuzSU",
      color: "#d9d9d9",
      blur_hash: "LXLgkUjE^*kC_4WVNIj?sSkCM{oL",
      urls: {
        raw: "https://images.unsplash.com/photo-1592895792095-85fa785192a9?ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwyfHxtaW5kZnVsbmVzc3xlbnwwfHx8fDE2NjYxNzM1MTg&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1592895792095-85fa785192a9?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwyfHxtaW5kZnVsbmVzc3xlbnwwfHx8fDE2NjYxNzM1MTg&ixlib=rb-4.0.3&q=80",
        regular:
          "https://images.unsplash.com/photo-1592895792095-85fa785192a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwyfHxtaW5kZnVsbmVzc3xlbnwwfHx8fDE2NjYxNzM1MTg&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1592895792095-85fa785192a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwyfHxtaW5kZnVsbmVzc3xlbnwwfHx8fDE2NjYxNzM1MTg&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1592895792095-85fa785192a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwyfHxtaW5kZnVsbmVzc3xlbnwwfHx8fDE2NjYxNzM1MTg&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1592895792095-85fa785192a9",
      },
    },
    id: 118766,
    tags: [
      "future bass",
      "epic",
      "mysterious",
      "electronic",
      "dark",
      "scary",
      "horror",
      "thriller",
      "energetic",
      "beats",
      "build up scenes",
      "action",
      "intro outro",
      "podcast",
      "suspense",
    ],
    user_id: 2264996,
    user: "LeonellCassio",
    src: "https://cdn.pixabay.com/audio/2022/08/31/audio_419263fc12.mp3",
    download_url:
      "https://cdn.pixabay.com/download/audio/2022/08/31/audio_419263fc12.mp3?filename=leonell-cassio-the-blackest-bouquet-118766.mp3",
    name: "Leonell Cassio - The Blackest Bouquet",
    duration: 221.309375,
    moods: [
      "Restless",
      "Laid Back",
      "Hopeful",
      "Dreamy",
      "Energetic",
      "Suspense",
      "Epic",
      "Bright",
    ],
    genres: ["Future Bass", "Beats", "Electronic"],
    movements: [
      "Smooth",
      "Chasing",
      "Heavy & Ponderous",
      "Medium",
      "Floating",
      "Elegant",
    ],
    keywords:
      "epic, elegant, mysterious, vlog music, electronic, build up scenes, intro outro, background music, synthwave, scary, dreamy, horror scene, beats, hopeful, horror, podcast, dance, supernatural, dark, main title, heavy & ponderous, crime scene, lullabies, restless, music for youtube videos, music for videos, bright, video games, energetic, smooth, sat, suspense, chasing, medium, future bass, floating, action, laid back, thriller, dubstep",
  },
  {
    cover_image: {
      unsplash_photo_id: "ktPKyUs3Qjs",
      color: "#262626",
      blur_hash: "LWF#dm-V0ft7%0s:s;s:0eR+-:ae",
      urls: {
        raw: "https://images.unsplash.com/photo-1505455184862-554165e5f6ba?ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwzfHxtaW5kZnVsbmVzc3xlbnwwfHx8fDE2NjYxNzM1MTg&ixlib=rb-1.2.1",
        full: "https://images.unsplash.com/photo-1505455184862-554165e5f6ba?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwzfHxtaW5kZnVsbmVzc3xlbnwwfHx8fDE2NjYxNzM1MTg&ixlib=rb-1.2.1&q=80",
        regular:
          "https://images.unsplash.com/photo-1505455184862-554165e5f6ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwzfHxtaW5kZnVsbmVzc3xlbnwwfHx8fDE2NjYxNzM1MTg&ixlib=rb-1.2.1&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1505455184862-554165e5f6ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwzfHxtaW5kZnVsbmVzc3xlbnwwfHx8fDE2NjYxNzM1MTg&ixlib=rb-1.2.1&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1505455184862-554165e5f6ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwzfHxtaW5kZnVsbmVzc3xlbnwwfHx8fDE2NjYxNzM1MTg&ixlib=rb-1.2.1&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1505455184862-554165e5f6ba",
      },
    },
    id: 116199,
    tags: [
      "prostration",
      "slow motion",
      "dream",
      "melancholy",
      "sadness",
      "drama",
      "sad documentary",
      "hypnotic",
      "calm",
      "inspirational",
      "tragic",
      "cinematic guitar",
      "landscape",
      "catastrophe",
      "east",
    ],
    user_id: 28841948,
    user: "Lexin_Music",
    src: "https://cdn.pixabay.com/audio/2022/08/02/audio_884fe92c21.mp3",
    download_url:
      "https://cdn.pixabay.com/download/audio/2022/08/02/audio_884fe92c21.mp3?filename=inspiring-cinematic-ambient-116199.mp3",
    name: "Inspiring Cinematic Ambient",
    duration: 189.910188,
    moods: [
      "Hopeful",
      "Restless",
      "Bright",
      "Dreamy",
      "Uplifting",
      "Suspense",
      "Epic",
      "Sentimental",
    ],
    genres: [
      "Beautiful Plays",
      "Build Up Scenes",
      "Adventure",
      "Ambient",
      "Pulses",
      "Nostalgia",
      "Modern Classical",
      "Small Emotions",
    ],
    movements: ["Elegant", "Floating", "Chasing", "Medium", "Fast", "Running"],
    keywords:
      "air, modern classical, epic, drama, elegant, uplifting, world, build up scenes, nostalgia, background music, sad documentary, calm, dreamy, travel, small emotions, fast, dream, adventure, tragic, prayer, hopeful, pulses, cinematic music, contemplative, inspirational, restless, music for youtube videos, landscape, music for videos, bright, melancholy, war, ethnic, slow motion, cinematic guitar, film music, running, ambient, suspense, chasing, medium, hope, sentimental, sadness, hypnotic, beautiful plays, floating, catastrophe, east, sorrow, prostration",
  },
];

export interface IStateProps {
  tracks: TrackProps[];
  currentIndex: number;
  showBanner: boolean;
  isPlaying: boolean;
  activeSong: TrackProps | null;
  trackProgress: number;
  isShuffle: boolean;
  isRepeat: boolean;
}
const initialState: IStateProps = {
  tracks: tracks,
  currentIndex: 0,
  isShuffle: false,
  isRepeat: false,
  showBanner: true,
  isPlaying: false,
  activeSong: tracks[0],
  trackProgress: 0,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      console.log(action.payload);
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
    prevSong: (state, action) => {},

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});

export const {
  setActiveSong,
  nextSong,
  prevSong,
  playPause,
  onShuffle,
  onRepeat,
  setTrackProgress,
} = playerSlice.actions;

export default playerSlice.reducer;
