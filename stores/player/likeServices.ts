import axios from "axios";

import API_URL from "../../configs/apiUrl";

// Register user
const like = async ({ track_id, token }: any) => {
  await axios.post(
    API_URL + "/collection/like/" + track_id,
    {},
    {
      headers: {
        authorization: "Bearer " + token,
      },
    }
  );
  return true;
};

const unLike = async ({ track_id, token }: any) => {
  await axios.post(
    API_URL + "/collection/unlike/" + track_id,
    {},
    {
      headers: {
        authorization: "Bearer " + token,
      },
    }
  );
  return true;
};

const idsOflikedTracks = async (token: string) => {
  const response = await axios.get(API_URL + "/collection/liked", {
    headers: {
      authorization: "Bearer " + token,
    },
  });
  return response.data;
};

const likeService = {
  like,
  unLike,
  idsOflikedTracks,
};

export default likeService;
