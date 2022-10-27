export interface TrackProps {
  cover_image: CoverImage;
  id: number;
  tags: string[];
  user_id: number;
  user: string;
  src: string;
  download_url: string;
  name: string;
  duration: number;
  moods: string[];
  genres: string[];
  movements: string[];
  keywords: string;
}

export interface CoverImage {
  unsplash_photo_id: string;
  color: string;
  blur_hash: string;
  urls: Urls;
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}
