import {React, useState} from 'react'
import { useNavigate } from "react-router-dom";

export default function SignUp() {
const [credientials, setCredientials] = useState({
  name: "",
  email: "",
  password: "",
});
const onchangeButton = (e) => {
  setCredientials({ ...credientials, [e.target.name]: e.target.value });
};
let navigate= useNavigate();

const submitButton = async (e) => {
  e.preventDefault();

  const response = await fetch("http://localhost:5000/api/auth/createuser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: credientials.name,
      email: credientials.email,
      password: credientials.password,
    }),
  });
  const jso = await response.json();
  console.log(jso);
  if (jso.success) {
    // props.showalert("succesful to signup", "success");
    //save the auth token
    localStorage.setItem("token", jso.authToken);
   navigate("/body");
  } else {
    alert("enter a valid credientisals");
  }
};

  return (
    <div className="container">
      <form onSubmit={submitButton}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your name{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            onChange={onchangeButton}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={onchangeButton}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="exampleInputPassword1"
            onChange={onchangeButton}
            minLength={5}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
