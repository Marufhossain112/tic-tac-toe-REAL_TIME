import React, { useState } from "react";

const SignUp = () => {
  const [user, setUser] = useState(null);
  const handleSignUp = () => {
    console.log("I am clicked");
  };
  return (
    <div>
      <label>SignUp</label>
      <input
        placeholder="First Name"
        onChange={(event) => {
          setUser({ ...user, firstName: event.target.value });
        }}
      />
      <input
        placeholder="Last Name"
        onChange={(event) => {
          setUser({ ...user, lastName: event.target.value });
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
