import { useState } from "react";

function App() {
  const [present, setPresent] = useState(0);
  const [absent, setAbsent] = useState(50);
  return (
    <div>
      <h1>Attendance Tracker</h1>
      <p>Welcome to my React application</p>
      <p>Present: {present}</p>
      <p>Absent: {absent}</p>
      <button
        onClick={() => {
          setPresent(present + 1);
          setAbsent(absent - 1);
        }}
      >
        Mark Present
      </button>
    </div>
  );
}
export default App;
