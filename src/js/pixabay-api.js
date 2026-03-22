import axios from "axios";

const KEY = "55068673-7a1553b3dfa5acdc200b34057";
const BASE_URL = "https://pixabay.com/api/";

export function getImagesByQuery(query) {
  return axios.get(BASE_URL, {
    params: {
      key: KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    },
  }).then(res => res.data);
}
