// import Textarea from "./Textarea";
import axios from "axios";
import { useState } from "react";
import { countries } from "./Country";

const Translate = () => {
  const [text, setText] = useState("hi");
  const [lang, setLang] = useState("hi");
  const [speech, setSpeech] = useState(true);
  const [translatedText, setTranslatedText] = useState("");

  // useEffect(() => {
  const encodedParams = new URLSearchParams();
  encodedParams.set("source_language", "en");
  // encodedParams.set("target_language", "hi");
  encodedParams.set("target_language", lang);
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
    console.log(data);

    return data;
  };

  // console.log(countries);

  const changeHandler = (e) => {
    // console.log(e);
    console.log(e.target.value);
    setLang(e.target.value);
  };

  const speechHandler = (e) => {
    console.log(e);
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new window.SpeechRecognition();

    recognition.interimResults = true;
    recognition.lang = "en-IN";
    navigator.permissions.query({
      name: "microphone",
    });

    recognition.addEventListener("result", (e) => {
      console.log(e.results);
      const transcript = Array.from(e.results).map((result) =>
        result[0].map((result) => result.transcript).join("")
      );
      console.log(transcript);
      setText(transcript);
    });

    recognition.onerror = function (event) {
      console.log(event.error, event);
    };

    if (speech) {
      recognition.start();
    }
  };

  return (
    <div className="container w-3/4">
      <div className="wrapper">
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
        <ul className="controls">
          <li className="row from">
            <div className="icons">
              <i
                onClick={speechHandler}
                id="from"
                className="fas fa-volume-up"
              ></i>
              <i id="from" className="fas fa-copy"></i>
            </div>
            <select onChange={changeHandler}>
              {/* <option value="Language">Language</option> */}
              {countries.map((language) => (
                <option key={language.code} value={language.code.slice(0, 2)}>
                  {language.name}
                </option>
              ))}
            </select>
          </li>
          <li className="exchange">
            <i className="fas fa-exchange-alt"></i>
          </li>
          <li className="row to">
            <select></select>
            <div className="icons">
              <i id="to" className="fas fa-volume-up"></i>
              <i id="to" className="fas fa-copy"></i>
            </div>
          </li>
        </ul>
      </div>
      <button onClick={() => fetchFromAPI()}>Translate Text</button>
    </div>
  );
};

export default Translate;
