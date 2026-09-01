import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Profile } from "./profile.jsx";
import { Greeting } from "./greeting.jsx";
import { LanguageProvider } from "./LanguageContext.jsx";

function Parent() {
  return (
    <>
      <Profile
        image="https://i0.wp.com/picjumbo.com/wp-content/uploads/studio-artistic-portrait-of-a-relaxed-man-with-fashion-glasses-free-image.jpeg?w=600&quality=80"
        name="BOBBY"
        age={20}
      />

      <App />
      <Greeting name="BOB" />

      <Profile
        image="https://i0.wp.com/picjumbo.com/wp-content/uploads/studio-artistic-portrait-of-a-relaxed-man-with-fashion-glasses-free-image.jpeg?w=600&quality=80"
        name="JONNY"
        age={25}
      />

      <App />
      <Greeting name="JON" />

      <Profile
        image="https://i0.wp.com/picjumbo.com/wp-content/uploads/studio-artistic-portrait-of-a-relaxed-man-with-fashion-glasses-free-image.jpeg?w=600&quality=80"
        name="PREM SAHITH"
        age={30}
      />

      <App />
      <Greeting name="PREM" />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <Parent />
    </LanguageProvider>
  </StrictMode>,
);
