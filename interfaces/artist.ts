export interface Artists {
  id: number;
  username: string;
  display_name: string;
  avatar: Avatar;
}

export interface Avatar {
  urls: Urls;
  color: string;
  blur_hash: string;
  unsplash_photo_id: string;
}

export interface Urls {
  raw: string;
  full: string;
  small: string;
  thumb: string;
  regular: string;
  small_s3: string;
}

export const tracksToArtists = (tracks: any) => {
  return tracks.map((track: any) => {
    return {
      id: track.artist_id,
      username: "",
      display_name: track.artist_name,
      avatar: track.avatar,
    };
  });
};
