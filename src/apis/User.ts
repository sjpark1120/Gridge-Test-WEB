import AxiosInstance from "./CustomAxios";
const UserApi = {
  duplicateId: async (loginId: string) => {
    try {
      const response = await AxiosInstance.get("/users", {
        params: {
          loginId,
        },
      });
      //console.log("response: ", response);
      return response.data;
    } catch (error) {
      console.error("Error in duplicate id check:", error);
      throw error;
    }
  },
  getProfile: async (loginId: string) => {
    try {
      const response = await AxiosInstance.get(`/users/${loginId}/profile`);
      //console.log("response: ", response);
      return response.data;
    } catch (error) {
      console.error("Error in get Profile:", error);
      throw error;
    }
  },
};
export default UserApi;
