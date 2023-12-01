import classes from "./User.module.css";

function User({ firstName, lastName, email, password }) {
  return (
    <div className={classes.userPlate}>
      <p>
        <span className={classes.sheetElement}>FirstName: </span>
        {firstName}
      </p>
      <p>
        <span className={classes.sheetElement}>Last name: </span>
        {lastName}
      </p>
      <p>
        <span className={classes.sheetElement}>Email: </span>
        {email}
      </p>
      <p>
        <span className={classes.sheetElement}>Password: </span>
        {password}
      </p>
    </div>
  );
}

export default User;
