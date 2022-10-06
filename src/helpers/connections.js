import axios from "axios";
const BASEURL = "https://api.gophermines.com/";
//const BASEURL = "http://localhost:3001/";

export async function apiRequest(
  path,
  body = {},
  method = "get",
  auth = false
) {
  let header = {};
  if (auth && auth.state)
    header = {
      Authorization: `Bearer ${auth.token}`,
    };
  try {
    const response = await axios({
      method: method,
      url: BASEURL + path,
      headers: header,
      data: body,
    });
    return response.data;
  } catch (error) {
    return error.response.data.error;
  }
}
