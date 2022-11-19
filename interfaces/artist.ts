export interface Artists {
  id: number;
  username: string;
  display_name: string;
  avatar: Avatar;
}

export interface Avatar {
  url: string;
  color: string;
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
