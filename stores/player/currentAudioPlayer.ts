import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { stat } from "fs";
import { TrackProps } from "../../interfaces/Track";
import likeService from "./likeServices";

const tracks: TrackProps[] = [
  {
    id: 24886,
    duration: 132.022844,
    track_name: "Space Popcorn",
    src: "https://cdn.pixabay.com/audio/2022/03/09/audio_7ba1c4c9bb.mp3",
    cover_image: {
      urls: {
        raw: "https://images.unsplash.com/photo-1436397543931-01c4a5162bdb?ixid=MnwzNzM5Nzh8MHwxfHNlYXJjaHwxN3x8YmFja2dyb3VuZHxlbnwwfHx8fDE2NjYzMjk1MTY&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1436397543931-01c4a5162bdb?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNzM5Nzh8MHwxfHNlYXJjaHwxN3x8YmFja2dyb3VuZHxlbnwwfHx8fDE2NjYzMjk1MTY&ixlib=rb-4.0.3&q=80",
        small:
          "https://images.unsplash.com/photo-1436397543931-01c4a5162bdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzM5Nzh8MHwxfHNlYXJjaHwxN3x8YmFja2dyb3VuZHxlbnwwfHx8fDE2NjYzMjk1MTY&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1436397543931-01c4a5162bdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzM5Nzh8MHwxfHNlYXJjaHwxN3x8YmFja2dyb3VuZHxlbnwwfHx8fDE2NjYzMjk1MTY&ixlib=rb-4.0.3&q=80&w=200",
        regular:
          "https://images.unsplash.com/photo-1436397543931-01c4a5162bdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzM5Nzh8MHwxfHNlYXJjaHwxN3x8YmFja2dyb3VuZHxlbnwwfHx8fDE2NjYzMjk1MTY&ixlib=rb-4.0.3&q=80&w=1080",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1436397543931-01c4a5162bdb",
      },
      color: "#c04026",
      blur_hash: "LDLB9Ct,9ZM0y@IoXStlCSv~fiO?",
      unsplash_photo_id: "HALe2SmkWAI",
    },
    artist_name: "Stacey Witting",
    artist_id: 25235210,
  },
  {
    id: 121456,
    duration: 182.98775,
    track_name: "Beautiful Corporate Inspiration",
    src: "https://cdn.pixabay.com/audio/2022/10/01/audio_3155385c87.mp3",
    cover_image: {
      urls: {
        raw: "https://images.unsplash.com/photo-1519225254375-0217eaa536c8?ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwzMDN8fGZsb3dlcnN8ZW58MHx8fHwxNjY2Mjc5MzYx&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1519225254375-0217eaa536c8?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwzMDN8fGZsb3dlcnN8ZW58MHx8fHwxNjY2Mjc5MzYx&ixlib=rb-4.0.3&q=80",
        small:
          "https://images.unsplash.com/photo-1519225254375-0217eaa536c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwzMDN8fGZsb3dlcnN8ZW58MHx8fHwxNjY2Mjc5MzYx&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1519225254375-0217eaa536c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwzMDN8fGZsb3dlcnN8ZW58MHx8fHwxNjY2Mjc5MzYx&ixlib=rb-4.0.3&q=80&w=200",
        regular:
          "https://images.unsplash.com/photo-1519225254375-0217eaa536c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwzMDN8fGZsb3dlcnN8ZW58MHx8fHwxNjY2Mjc5MzYx&ixlib=rb-4.0.3&q=80&w=1080",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1519225254375-0217eaa536c8",
      },
      color: "#d9d9d9",
      blur_hash: "LTKw,[IV-=t6_4a{baj[MxofD%WB",
      unsplash_photo_id: "mjtc0khBqls",
    },
    artist_name: "Laura Konopelski",
    artist_id: 24397640,
  },
  {
    id: 115479,
    duration: 139.493875,
    track_name: "Crazy Energy",
    src: "https://cdn.pixabay.com/audio/2022/07/23/audio_5cf955aff9.mp3",
    cover_image: {
      urls: {
        raw: "https://images.unsplash.com/photo-1635007920037-fde83e0d8dc4?ixid=MnwzNzM5Nzh8MHwxfHNlYXJjaHw3NTB8fGFsYnVtfGVufDB8fHx8MTY2NjMyOTM3Nw&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1635007920037-fde83e0d8dc4?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNzM5Nzh8MHwxfHNlYXJjaHw3NTB8fGFsYnVtfGVufDB8fHx8MTY2NjMyOTM3Nw&ixlib=rb-4.0.3&q=80",
        small:
          "https://images.unsplash.com/photo-1635007920037-fde83e0d8dc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzM5Nzh8MHwxfHNlYXJjaHw3NTB8fGFsYnVtfGVufDB8fHx8MTY2NjMyOTM3Nw&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1635007920037-fde83e0d8dc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzM5Nzh8MHwxfHNlYXJjaHw3NTB8fGFsYnVtfGVufDB8fHx8MTY2NjMyOTM3Nw&ixlib=rb-4.0.3&q=80&w=200",
        regular:
          "https://images.unsplash.com/photo-1635007920037-fde83e0d8dc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzM5Nzh8MHwxfHNlYXJjaHw3NTB8fGFsYnVtfGVufDB8fHx8MTY2NjMyOTM3Nw&ixlib=rb-4.0.3&q=80&w=1080",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1635007920037-fde83e0d8dc4",
      },
      color: "#73c0d9",
      blur_hash: "LcAo+_ysRiRPyERkemozR5R5e-g3",
      unsplash_photo_id: "GWx_jaQ5rc4",
    },
    artist_name: "Veronica Homenick",
    artist_id: 22579021,
  },
  {
    id: 9716,
    duration: 136.437531,
    track_name: "Heroic Story - Inspiring Theme",
    src: "https://cdn.pixabay.com/audio/2021/10/22/audio_5c12de550d.mp3",
    cover_image: {
      urls: {
        raw: "https://images.unsplash.com/photo-1454982523318-4b6396f39d3a?ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwyNjF8fG5hdHVyZXxlbnwwfHx8fDE2NjYyNzkzNDg&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1454982523318-4b6396f39d3a?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwyNjF8fG5hdHVyZXxlbnwwfHx8fDE2NjYyNzkzNDg&ixlib=rb-4.0.3&q=80",
        small:
          "https://images.unsplash.com/photo-1454982523318-4b6396f39d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwyNjF8fG5hdHVyZXxlbnwwfHx8fDE2NjYyNzkzNDg&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1454982523318-4b6396f39d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwyNjF8fG5hdHVyZXxlbnwwfHx8fDE2NjYyNzkzNDg&ixlib=rb-4.0.3&q=80&w=200",
        regular:
          "https://images.unsplash.com/photo-1454982523318-4b6396f39d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwyNjF8fG5hdHVyZXxlbnwwfHx8fDE2NjYyNzkzNDg&ixlib=rb-4.0.3&q=80&w=1080",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1454982523318-4b6396f39d3a",
      },
      color: "#26260c",
      blur_hash: "LRCsXBN1D$sj%%R-RNV?%OWUn#jZ",
      unsplash_photo_id: "mWRR1xj95hg",
    },
    artist_name: "Veronica Homenick",
    artist_id: 22579021,
  },
  {
    id: 11545,
    duration: 200.280813,
    track_name: "Endless Beauty (Main)",
    src: "https://cdn.pixabay.com/audio/2021/12/01/audio_2fe16fd258.mp3",
    cover_image: {
      urls: {
        raw: "https://images.unsplash.com/photo-1557592923-9f721b5daa29?ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwxNjN8fG1pbmRmdWxuZXNzfGVufDB8fHx8MTY2NjE3MzYyMw&ixlib=rb-1.2.1",
        full: "https://images.unsplash.com/photo-1557592923-9f721b5daa29?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwxNjN8fG1pbmRmdWxuZXNzfGVufDB8fHx8MTY2NjE3MzYyMw&ixlib=rb-1.2.1&q=80",
        small:
          "https://images.unsplash.com/photo-1557592923-9f721b5daa29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwxNjN8fG1pbmRmdWxuZXNzfGVufDB8fHx8MTY2NjE3MzYyMw&ixlib=rb-1.2.1&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1557592923-9f721b5daa29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwxNjN8fG1pbmRmdWxuZXNzfGVufDB8fHx8MTY2NjE3MzYyMw&ixlib=rb-1.2.1&q=80&w=200",
        regular:
          "https://images.unsplash.com/photo-1557592923-9f721b5daa29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwxNjN8fG1pbmRmdWxuZXNzfGVufDB8fHx8MTY2NjE3MzYyMw&ixlib=rb-1.2.1&q=80&w=1080",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1557592923-9f721b5daa29",
      },
      color: "#d9d9d9",
      blur_hash: "LkNv[7E1M{Rj*0t7WBWB?Hxtt7t7",
      unsplash_photo_id: "7-4cIpUbgtQ",
    },
    artist_name: "Leah Blick",
    artist_id: 22836301,
  },
  {
    id: 21921,
    duration: 195.265281,
    track_name: "Phenix",
    src: "https://cdn.pixabay.com/audio/2022/03/02/audio_39fc06ca6c.mp3",
    cover_image: {
      urls: {
        raw: "https://images.unsplash.com/photo-1559608622-d443df453289?ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwyNDh8fGhhcHB5fGVufDB8fHx8MTY2NjMyOTY2MQ&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1559608622-d443df453289?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwyNDh8fGhhcHB5fGVufDB8fHx8MTY2NjMyOTY2MQ&ixlib=rb-4.0.3&q=80",
        small:
          "https://images.unsplash.com/photo-1559608622-d443df453289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwyNDh8fGhhcHB5fGVufDB8fHx8MTY2NjMyOTY2MQ&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1559608622-d443df453289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwyNDh8fGhhcHB5fGVufDB8fHx8MTY2NjMyOTY2MQ&ixlib=rb-4.0.3&q=80&w=200",
        regular:
          "https://images.unsplash.com/photo-1559608622-d443df453289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHwyNDh8fGhhcHB5fGVufDB8fHx8MTY2NjMyOTY2MQ&ixlib=rb-4.0.3&q=80&w=1080",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1559608622-d443df453289",
      },
      color: "#d9d9d9",
      blur_hash: "L#HU%y%MxaR*~pozofWVx]RjWBs:",
      unsplash_photo_id: "SrunqRT0A34",
    },
    artist_name: "Jan Johnston",
    artist_id: 25958799,
  },
  {
    id: 116035,
    duration: 201.552,
    track_name: "Caribbean Travel Vacation Music",
    src: "https://cdn.pixabay.com/audio/2022/07/31/audio_af6afcd502.mp3",
    cover_image: {
      urls: {
        raw: "https://images.unsplash.com/photo-1509210459313-17feefdff5cd?ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHw1OTB8fGJhY2tncm91bmR8ZW58MHx8fHwxNjY2MzI5NzM4&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1509210459313-17feefdff5cd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHw1OTB8fGJhY2tncm91bmR8ZW58MHx8fHwxNjY2MzI5NzM4&ixlib=rb-4.0.3&q=80",
        small:
          "https://images.unsplash.com/photo-1509210459313-17feefdff5cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHw1OTB8fGJhY2tncm91bmR8ZW58MHx8fHwxNjY2MzI5NzM4&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1509210459313-17feefdff5cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHw1OTB8fGJhY2tncm91bmR8ZW58MHx8fHwxNjY2MzI5NzM4&ixlib=rb-4.0.3&q=80&w=200",
        regular:
          "https://images.unsplash.com/photo-1509210459313-17feefdff5cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHw1OTB8fGJhY2tncm91bmR8ZW58MHx8fHwxNjY2MzI5NzM4&ixlib=rb-4.0.3&q=80&w=1080",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1509210459313-17feefdff5cd",
      },
      color: "#f3f3f3",
      blur_hash: "LGP?{wWA-=kBt7D%WB?b~Xj[-;t7",
      unsplash_photo_id: "INjdgkCwHp0",
    },
    artist_name: "Pamela Swaniawski",
    artist_id: 23180933,
  },
  {
    id: 20567,
    duration: 158.6155,
    track_name: "Dragon",
    src: "https://cdn.pixabay.com/audio/2022/02/11/audio_f42e8263b9.mp3",
    cover_image: {
      urls: {
        raw: "https://images.unsplash.com/photo-1469406396016-013bfae5d83e?ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHw1MjV8fGhhcHB5fGVufDB8fHx8MTY2NjMyOTc0Mg&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1469406396016-013bfae5d83e?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHw1MjV8fGhhcHB5fGVufDB8fHx8MTY2NjMyOTc0Mg&ixlib=rb-4.0.3&q=80",
        small:
          "https://images.unsplash.com/photo-1469406396016-013bfae5d83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHw1MjV8fGhhcHB5fGVufDB8fHx8MTY2NjMyOTc0Mg&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1469406396016-013bfae5d83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHw1MjV8fGhhcHB5fGVufDB8fHx8MTY2NjMyOTc0Mg&ixlib=rb-4.0.3&q=80&w=200",
        regular:
          "https://images.unsplash.com/photo-1469406396016-013bfae5d83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjQwNTF8MHwxfHNlYXJjaHw1MjV8fGhhcHB5fGVufDB8fHx8MTY2NjMyOTc0Mg&ixlib=rb-4.0.3&q=80&w=1080",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1469406396016-013bfae5d83e",
      },
      color: "#f3f3f3",
      blur_hash: "LVHLF:-.4.Mxl8E2RPMy~Dr^InNY",
      unsplash_photo_id: "SAHBl2UpXco",
    },
    artist_name: "Jacquelyn Collins",
    artist_id: 24653570,
  },
  {
    id: 16525,
    duration: 121.626094,
    track_name: "Positive Hopeful Upbeat Fun Ukulele Hope Pleasure Music",
    src: "https://cdn.pixabay.com/audio/2022/02/05/audio_3289942575.mp3",
    cover_image: {
      urls: {
        raw: "https://images.unsplash.com/photo-1516617442634-75371039cb3a?ixid=MnwzNzM5Nzh8MHwxfHNlYXJjaHwxM3x8YmFja2dyb3VuZHxlbnwwfHx8fDE2NjYzMjk1MTY&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1516617442634-75371039cb3a?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNzM5Nzh8MHwxfHNlYXJjaHwxM3x8YmFja2dyb3VuZHxlbnwwfHx8fDE2NjYzMjk1MTY&ixlib=rb-4.0.3&q=80",
        small:
          "https://images.unsplash.com/photo-1516617442634-75371039cb3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzM5Nzh8MHwxfHNlYXJjaHwxM3x8YmFja2dyb3VuZHxlbnwwfHx8fDE2NjYzMjk1MTY&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1516617442634-75371039cb3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzM5Nzh8MHwxfHNlYXJjaHwxM3x8YmFja2dyb3VuZHxlbnwwfHx8fDE2NjYzMjk1MTY&ixlib=rb-4.0.3&q=80&w=200",
        regular:
          "https://images.unsplash.com/photo-1516617442634-75371039cb3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzM5Nzh8MHwxfHNlYXJjaHwxM3x8YmFja2dyb3VuZHxlbnwwfHx8fDE2NjYzMjk1MTY&ixlib=rb-4.0.3&q=80&w=1080",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1516617442634-75371039cb3a",
      },
      color: "#262626",
      blur_hash: "LH9j$MiwMwM{V@a{ofay4mg4tRs;",
      unsplash_photo_id: "wuc-KEIBrdE",
    },
    artist_name: "Elmer Stamm",
    artist_id: 970568,
  },
  {
    id: 20744,
    duration: 169.639156,
    track_name: "Michael Ihde - R.B.T.Y - Pop Pophouse Synthwave",
    src: "https://cdn.pixabay.com/audio/2022/02/12/audio_341c7e5d12.mp3",
    cover_image: {
      urls: {
        raw: "https://images.unsplash.com/photo-1610120310588-99bcffc7bf09?ixid=MnwzNzM5Nzh8MHwxfHNlYXJjaHw2MzF8fGFsYnVtfGVufDB8fHx8MTY2NjMyOTM3Mw&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1610120310588-99bcffc7bf09?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNzM5Nzh8MHwxfHNlYXJjaHw2MzF8fGFsYnVtfGVufDB8fHx8MTY2NjMyOTM3Mw&ixlib=rb-4.0.3&q=80",
        small:
          "https://images.unsplash.com/photo-1610120310588-99bcffc7bf09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzM5Nzh8MHwxfHNlYXJjaHw2MzF8fGFsYnVtfGVufDB8fHx8MTY2NjMyOTM3Mw&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1610120310588-99bcffc7bf09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzM5Nzh8MHwxfHNlYXJjaHw2MzF8fGFsYnVtfGVufDB8fHx8MTY2NjMyOTM3Mw&ixlib=rb-4.0.3&q=80&w=200",
        regular:
          "https://images.unsplash.com/photo-1610120310588-99bcffc7bf09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzM5Nzh8MHwxfHNlYXJjaHw2MzF8fGFsYnVtfGVufDB8fHx8MTY2NjMyOTM3Mw&ixlib=rb-4.0.3&q=80&w=1080",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1610120310588-99bcffc7bf09",
      },
      color: "#404040",
      blur_hash: "L37BAjRjIooy01a#j[t74-Rioej[",
      unsplash_photo_id: "jbTQq7e2MDY",
    },
    artist_name: "Michele Nienow",
    artist_id: 5962636,
  },
];
export enum LikedStatus {
  Initial,
  success,
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
  fetchlikedStatus: LikedStatus;
}
const initialState: IStateProps = {
  tracks: tracks,
  currentIndex: 0,
  liked: [],
  fetchlikedStatus: LikedStatus.Initial,
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
  },
  extraReducers: (builder) => {
    builder.addCase(getLikedSongs.fulfilled, (state, action) => {
      state.fetchlikedStatus = LikedStatus.success;
      state.liked = action.payload.data;
    });
    builder.addCase(getLikedSongs.rejected, (state, action) => {
      state.fetchlikedStatus = LikedStatus.success;
    });
  },
});

export const getLikedSongs = createAsyncThunk(
  "likeServices/idsOflikedSongs",
  async (token: string, thunkAPI) => {
    try {
      return await likeService.idsOflikedTracks(token);
    } catch (error) {
      // console.log(error);
    }
  }
);
export const Like = createAsyncThunk(
  "likeServices/addlike",
  async ({ track_id, token }: any, thunkAPI) => {
    try {
      return await likeService.like({
        track_id,
        token,
      });
    } catch (error) {
      // console.log(error);
    }
  }
);
export const unLike = createAsyncThunk(
  "likeServices/removelike",
  async ({ track_id, token }: any, thunkAPI) => {
    try {
      return await likeService.unLike({
        track_id,
        token,
      });
    } catch (error) {
      // console.log(error);
    }
  }
);

export const {
  setActiveSong,
  nextSong,
  prevSong,
  playPause,
  onShuffle,
  addToQueue,
  onRepeat,
  setTrackProgress,
  addLike,
  removeLike,
  reorderQueue,
} = playerSlice.actions;

export default playerSlice.reducer;
