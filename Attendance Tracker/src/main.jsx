import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Profile } from "./profile.jsx";
import { Greeting } from "./greeting.jsx";
import { LanguageProvider } from "./LanguageContext.jsx";

function Parent() {
  return (
    <div className="container">
      <div className="profiles">
        <div className="person-card">
          <Profile
            image="https://i0.wp.com/picjumbo.com/wp-content/uploads/studio-artistic-portrait-of-a-relaxed-man-with-fashion-glasses-free-image.jpeg?w=600&quality=80"
            name="BOBBY"
            age={20}
          />
          <Greeting name="BOB" />
        </div>

        <div className="person-card">
          <Profile
            image="https://i0.wp.com/picjumbo.com/wp-content/uploads/studio-artistic-portrait-of-a-relaxed-man-with-fashion-glasses-free-image.jpeg?w=600&quality=80"
            name="JON"
            age={25}
          />
          <Greeting name="JON" />
        </div>

        <div className="person-card">
          <Profile
            image="https://i0.wp.com/picjumbo.com/wp-content/uploads/studio-artistic-portrait-of-a-relaxed-man-with-fashion-glasses-free-image.jpeg?w=600&quality=80"
            name="PREM SAHITH"
            age={30}
          />
          <Greeting name="PREM" />
        </div>
      </div>

      <div className="app-card">
        <App />
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <Parent />
    </LanguageProvider>
  </StrictMode>,
);
