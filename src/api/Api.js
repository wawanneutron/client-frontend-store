import axios from "axios";

const Api = axios.create({
  baseURL: "https://adminsport.my.id/api",
});

export default Api;
