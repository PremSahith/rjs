import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Profile } from "./profile.jsx";
import { Greeting } from "./greeting.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Greeting name="PREM" />
    <Profile image="https://imgs.search.brave.com/oplrAcgpFkxyC59GotU0i93GoZgZHRMuTnAxpDzKl5c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9zdHVkaW8tYXJ0/aXN0aWMtcG9ydHJh/aXQtb2YtYS1yZWxh/eGVkLW1hbi13aXRo/LWZhc2hpb24tZ2xh/c3Nlcy1mcmVlLWlt/YWdlLmpwZWc_dz02/MDAmcXVhbGl0eT04/MA" />
  </StrictMode>,
);
