import axios from "axios";
import API_URL from "@/configs/apiUrl";

// Register user
const getRandomArtists = async () => {
  try {
    const response = await axios.all([
      axios.get(API_URL + "/artists/random/26"),
      axios.get(API_URL + "/songs/random/20"),
    ]);

    return {
      randomArtists: response[0].data.data.slice(0, 6),
      trendingArtists: response[0].data.data.slice(6, 16),
      topArtists: response[0].data.data.slice(16, 26),
      topHits: response[1].data.data.slice(0, 10),
      popular: response[1].data.data.slice(10, 20),
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
