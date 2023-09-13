import Translate from "./Translate";
import "./App.css";
import Dictaphone from "./TextToSpeechTest";
import TextToSpeechTest from "./TextToSpeechTest";

function App() {
  return (
    <main className="flex items-center justify-center px-3 h-[100vh] bg-[#5288EA]">
      <Translate />
      {/* <TextToSpeechTest /> */}
      {/* <Dictaphone /> */}
    </main>
  );
}

export default App;
