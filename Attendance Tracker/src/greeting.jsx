import { useContext } from "react";
import { LanguageContext } from "./LanguageContext.jsx";

function Greeting(props) {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <div>
      <h1>Hello {props.name}!</h1>
      <h1>Current Language: {language}</h1>
    </div>
  );
}

export { Greeting };
