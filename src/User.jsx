import { UserAge } from "./UserAge";
import { UserName } from "./UserName";

function UserInfo(props) {
  return (
    <div>
      <UserAge age={props.age} />
      <UserName name={props.name} />
    </div>
  );
}

export { UserInfo };
