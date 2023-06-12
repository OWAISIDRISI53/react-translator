// import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

// import { fetchFromAPI } from "./Fetch"
// import { options } from "./Fetch";
const Textarea = () => {
  const [text, setText] = useState("hi");

  const [translatedText, setTranslatedText] = useState("");

  // useEffect(() => {
  const encodedParams = new URLSearchParams();
  encodedParams.set("source_language", "en");
  encodedParams.set("target_language", "hi");
  // encodedParams.set("text", "What is your name?");
  encodedParams.set("text", text);

  const options = {
    method: "POST",
    url: "https://text-translator2.p.rapidapi.com/translate",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "c12ef31a82msh8000c38044c4b4bp1976c6jsn40e1e8312c7e",
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
    },
    data: encodedParams,
  };

  const fetchFromAPI = async () => {
    const { data } = await axios.request(options);
    const translatedData = await data.data.translatedText;
    setTranslatedText(translatedData);
    return data;
  };

  // return fetchFromAPI;
  // fetchFromAPI().then((data) => {
  //   console.log(data.data.translatedText);
  // });
  // }, [text]);

  return (
    <div className="text-input">
      <textarea
        spellCheck="false"
        className="from-text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <textarea
        spellCheck="false"
        readOnly
        disabled
        className="to-text"
        placeholder="Translation"
        value={translatedText}
      >
        {translatedText}
      </textarea>
    </div>
  );
};

export default Textarea;
