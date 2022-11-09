export interface TrackProps {
  id: number;
  duration: number;
  track_name: string;
  src: string;
  cover_image: CoverImage;
  artist_name: string;
  artist_id: number;
}

export interface CoverImage {
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

export const toTrackProps = (tracks: any): TrackProps[] => {
  return tracks.map((track: any) => {
    return {
      id: track.id,
      duration: track.duration,
      track_name: track.track_name,
      src: track.src,
      cover_image: track.cover_image,
      artist_name: track.artist_name,
      artist_id: track.track_id,
    };
  });
};
