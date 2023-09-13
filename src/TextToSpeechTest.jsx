import React, { useState } from "react";

const TextToSpeechTest = () => {
  return (
    <div>
      <h1>TextToSpeechTest</h1>
      <button
        className="px-6 py-4 bg-white cursor-pointer mx-3"
        onClick={speechHandler}
      >
        Speak
      </button>
    </div>
  );
};

export default TextToSpeechTest;
