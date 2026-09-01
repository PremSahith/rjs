import { useState } from "react";
import { UserInfo } from "./User";

function Profile(props) {
  const [age, setAge] = useState(props.age);

  const updated = (newAge) => {
    setAge(newAge);
  };

  return (
    <div>
      <img src={props.image} alt="Profile" width="200" />

      <h1>{props.name}</h1>

      <UserInfo name={props.name} age={age} onAgeChange={updated} />
    </div>
  );
}

export { Profile };
