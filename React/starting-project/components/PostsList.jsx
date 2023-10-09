import { useState } from "react";

import Post from "../components/Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";

function PostsList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("Lolek");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <NewPost
        onBodyChange={bodyChangeHandler}
        onAuthorChange={authorChangeHandler}
      />
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Manuel" body="Consectetur adipiscing elit." />
      </ul>
    </>
  );
}

export default PostsList;
