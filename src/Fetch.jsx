import axios from "axios";

export const BASE_URL = "https://text-translator2.p.rapidapi.com/translate";

// let text = ""

const encodedParams = new URLSearchParams();
encodedParams.set("source_language", "en");
encodedParams.set("target_language", "hi");
encodedParams.set("text", "What is your name?");

export const options = {
  method: "POST",
  url: "https://text-translator2.p.rapidapi.com/translate",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": "c12ef31a82msh8000c38044c4b4bp1976c6jsn40e1e8312c7e",
    "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
  },
  data: encodedParams,
};

export const fetchFromAPI = async () => {
  const { data } = await axios.request(options);
  return data;
};
