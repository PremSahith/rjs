import { UserInfo } from "./User";
function Profile(props) {
  const user = {
    name: "Prem",
    age: 20,
  };
  return (
    <div>
      <img src={props.image} alt="Profile" width="200" />
      <h1>Profile</h1>

      <UserInfo name={user.name} age={user.age} />
    </div>
  );
}

export { Profile };
