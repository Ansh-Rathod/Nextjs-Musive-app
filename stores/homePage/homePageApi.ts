import axios from "axios";
const API_URL = "https://musive-api.onrender.com/api";

// Register user
const getRandomArtists = async () => {
  try {
    const response = await axios.all([
      axios.get(API_URL + "/artists/random/6"),
      axios.get(API_URL + "/songs/random/10"),
      axios.get(API_URL + "/songs/random/10"),
    ]);

    return {
      randomArtists: response[0].data.data,
      topHits: response[1].data.data,
      popular: response[2].data.data,
    };
  } catch (error: any) {
    if (error.response) {
      throw {
        status: error.request.status,
        success: error.response.data.success,
        message: error.response.data.message,
      };
    } else {
      throw error;
    }
  }
};
const homePageApi = { getRandomArtists };

export default homePageApi;
