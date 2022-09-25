import axios from "axios";
const BASEURL = "http://localhost:3001/";

export async function apiRequest(
  path,
  body = {},
  method = "get",
  auth = false
) {
  let header = {};
  if (auth && auth.state)
    header = {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    };
  try {
    const response = await axios[method](BASEURL + path, body, header);
    return response.data;
  } catch (error) {
    return error.response.data.error;
  }
}
