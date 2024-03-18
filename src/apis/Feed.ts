import AxiosInstance from "./CustomAxios";
interface PostData {
  feedText: string;
  contentUrls: string[];
}
const FeedApi = {
  getFeeds: async (page: number) => {
    try {
      const response = await AxiosInstance.get("/feeds", {
        params: {
          size: 10,
          page,
        },
      });
      //console.log("response: ", response);
      return response.data;
    } catch (error) {
      console.error("Error in get feeds:", error);
      throw error;
    }
  },
  writePost: async (postdata: PostData) => {
    try {
      const response = await AxiosInstance.post("/feeds", postdata);
      //console.log("response: ", response);
      return response.data;
    } catch (error) {
      console.error("Error in write post:", error);
      throw error;
    }
  },
  getComments: async (feedId: number, page: number) => {
    try {
      const response = await AxiosInstance.get(`/feeds/${feedId}/comments`, {
        params: {
          size: 10,
          page,
        },
      });
      //console.log("response: ", response);
      return response.data;
    } catch (error) {
      console.error("Error in get comments:", error);
      throw error;
    }
  },
  writeComments: async (feedId: number, commentText: string) => {
    try {
      const response = await AxiosInstance.post(`/feeds/${feedId}/comment`, {
        commentText,
      });
      //console.log("response: ", response);
      return response.data;
    } catch (error) {
      console.error("Error in write comments:", error);
      throw error;
    }
  },
};
export default FeedApi;
