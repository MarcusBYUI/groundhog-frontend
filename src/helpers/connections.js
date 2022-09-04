import axios from "axios";
const BASEURL = "http://localhost:3001/";

export async function getProject(path, method = "get") {
  const response = await axios[method](BASEURL + path);
  return response.data;
}
