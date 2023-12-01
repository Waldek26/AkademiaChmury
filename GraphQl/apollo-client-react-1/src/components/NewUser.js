import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_USER_MUTATION } from "../GraphQL/Mutations";
import { Link, Form, redirect } from "react-router-dom";

function NewUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);
  const addUser = () => {
    createUser({
      variables: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      },
    });
    if (error) {
      console.log(error);
    }
  };

  return (
    <Form>
      <input
        type="text"
        placeholder="First Name "
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="E-mail"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={addUser}>Create User</button>
    </Form>
  );
}

export default NewUser;
export async function action({ request }) {
  return redirect("/");
}
