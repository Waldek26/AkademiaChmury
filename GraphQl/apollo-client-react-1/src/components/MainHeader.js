import { Link } from "react-router-dom";
import { MdPostAdd, MdMessage, MdRefresh } from "react-icons/md";
import classes from "./MainHeader.module.css";

function MainHeader({ onCreateUser, onRefresh }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        Users
      </h1>
      <p>
        <input type="text" name="" />
        <Link to="/create-user" className={classes.button} onClick={onRefresh}>
          <MdRefresh size={18} />
          Refresh list
        </Link>
        <Link
          to="/create-user"
          className={classes.button}
          onClick={onCreateUser}
        >
          <MdPostAdd size={18} />
          New User
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
