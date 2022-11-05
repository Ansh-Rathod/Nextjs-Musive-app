export interface Artists {
  id: number;
  username: string;
  display_name: string;
  avatar: Avatar;
  songs_count: string;
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
