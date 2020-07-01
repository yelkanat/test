import axios from "axios";

const instance = axios.create({
  baseURL: "http://94.130.172.45:8000/api/v1",
});

export default instance;
