import axios from "axios";

import API_URL from "@/configs/apiUrl";

// Register user
const like = async ({ track_id, token }: any) => {
  await axios.post(
    API_URL + "/like/" + track_id,
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
    API_URL + "/unlike/" + track_id,
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
  const response = await axios.get(API_URL + "/liked", {
    headers: {
      authorization: "Bearer " + token,
    },
  });
  return response.data;
};
const getCollections = async (token: string) => {
  const response = await axios.get(API_URL + "/collections/mylists", {
    headers: {
      authorization: "Bearer " + token,
    },
  });
  return response.data;
};
const addTrackToCollection = async (token: string, data: any) => {
  const response = await axios.put(API_URL + "/collections/add/track", data, {
    headers: {
      authorization: "Bearer " + token,
    },
  });
  return response.data;
};
const removeTrackFromCollection = async (token: string, data: any) => {
  const response = await axios.put(
    API_URL + "/collections/remove/track",
    data,
    {
      headers: {
        authorization: "Bearer " + token,
      },
    }
  );
  console.log("done");
  return response.data;
};
const createNewCollection = async (token: string, data: any) => {
  const response = await axios.post(API_URL + "/collections/new", data, {
    headers: {
      authorization: "Bearer " + token,
    },
  });
  return response.data;
};
const renameCollection = async (token: string, data: any) => {
  const response = await axios.put(
    API_URL +
      "/collections/rename/" +
      data.collection_id +
      "?name=" +
      data.collection_name,
    {},
    {
      headers: {
        authorization: "Bearer " + token,
      },
    }
  );
  return data;
};
const deleteCollection = async (token: string, data: any) => {
  const response = await axios.delete(
    API_URL + "/collections/" + data.collection_id,
    {
      headers: {
        authorization: "Bearer " + token,
      },
    }
  );
  return data;
};

const ApiService = {
  like,
  unLike,
  createNewCollection,
  idsOflikedTracks,
  addTrackToCollection,
  getCollections,
  deleteCollection,
  renameCollection,
  removeTrackFromCollection,
};

export default ApiService;
