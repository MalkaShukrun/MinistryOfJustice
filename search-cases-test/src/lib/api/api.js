import axios from "axios";

export const api = axios.create({
  baseURL: process.env.MINISTRYOFJUSTICE,
  headers: {
    "Content-Type": "application/json",
    "X-Frame-Options": "Sameorigin",
  },
});

api.interceptors.response.use(
  (result) => {
    if (!result.data.isSuccess) {
      return Promise.reject(new Error("result.data.IsSuccess is false."));
    }
    return result.data.response;
  },
  (error) => {
    console.log("error:" + error);
  }
);

export default api;
