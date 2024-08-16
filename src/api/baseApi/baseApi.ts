import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_PANDOOIN_BASE_URL;

export const baseApi = axios.create({
  baseURL,
});
