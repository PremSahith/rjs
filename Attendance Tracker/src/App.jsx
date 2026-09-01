import { useContext, useState } from "react";
import { LanguageContext } from "./LanguageContext";

function App() {
  const [present, setPresent] = useState(0);
  const [absent, setAbsent] = useState(50);
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <div>
      <h1>Attendance</h1>
      <p>Have a good Day</p>
      <p>Present: {present}</p>
      <p>Absent: {absent}</p>
      <p>Current Language: {language}</p>
      <button
        onClick={() => {
          setPresent(present + 1);
          setAbsent(absent - 1);
        }}
      >
        Mark Present
      </button>
      <br />
      <button onClick={() => setLanguage("en")}>English</button>
      <button onClick={() => setLanguage("hi")}>Hindi</button>
      <button onClick={() => setLanguage("ta")}>Tamil</button>
      <button onClick={() => setLanguage("es")}>Spanish</button>
    </div>
  );
}
export default App;
