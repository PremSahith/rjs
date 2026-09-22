import { useContext, useState } from "react";
import { LanguageContext } from "./LanguageContext";

function App() {
  const [present, setPresent] = useState(0);
  const [absent, setAbsent] = useState(50);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [submittedUsername, setSubmittedUsername] = useState("");

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

      <form
        onSubmit={(e) => {
          e.preventDefault();
          //this e.preventDefault() is used to prevent the default behavior of the form submission, which is to reload the page. Instead, we want to handle the form submission in our own way, which is to update the submittedName state with the current value of the name state.

          localStorage.setItem("username", username);
          localStorage.setItem("password", password);

          setSubmittedUsername(username);
        }}
      >
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button
          type="submit"
          disabled={username.length < 5 || password.length < 5}
        >
          Submit
        </button>
      </form>
      <p>Submitted Username: {submittedUsername}</p>
      <button
        onClick={() => {
          localStorage.removeItem("username");
          localStorage.removeItem("password");
        }}
      >
        Clear Data
      </button>
    </div>
  );
}
export default App;
