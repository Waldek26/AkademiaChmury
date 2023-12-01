import { Await, useLoaderData } from "react-router-dom";
import User from "./User";
import classes from "./UserList.module.css";

function UserList() {
  const users = useLoaderData();

  return (
    <div className={classes.userList}>
      {users.map((value) => (
        <User
          key={value.id}
          firstName={value.firstName}
          lastName={value.lastName}
          email={value.email}
          password={value.password}
        />
      ))}
    </div>
  );
}

export default UserList;
