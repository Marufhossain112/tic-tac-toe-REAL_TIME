import React, { useState } from "react";
import Axios from "axios";
import Cookies from "universal-cookie";

const SignUp = () => {
  const cookies = new Cookies();
  const [user, setUser] = useState(null);
  const handleSignUp = () => {
    console.log("I am clicked");
  };

  // 
  const signUp = () => {
    Axios.post("http://localhost:5000/signup", user).then((res) => {
      const { token, userId, firstName, lastName, username, hashedPassword } =
        res.data;
      cookies.set("token", token);
      cookies.set("userId", userId);
      cookies.set("username", username);
      cookies.set("firstName", firstName);
      cookies.set("lastName", lastName);
      cookies.set("hashedPassword", hashedPassword);
    });
  };
  return (
    <div>
      <label>SignUp</label>
      <input
        placeholder="Your Name"
        onChange={(event) => {
          setUser({ ...user, yourName: event.target.value });
        }}
      />

      <input
        placeholder="Username"
        onChange={(event) => {
          setUser({ ...user, username: event.target.value });
        }}
      />
      <input
        placeholder="Email"
        onChange={(event) => {
          setUser({ ...user, email: event.target.value });
        }}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(event) => {
          setUser({ ...user, password: event.target.value });
        }}
      />
      <button onClick={handleSignUp}> Sign Up</button>
    </div>
  );
};

export default SignUp;
