import{ useState, React }from 'react'

import { useNavigate  } from "react-router-dom";


export default function Login() {

      const [credientials, setCredientials] = useState({
        email: "",
        password: "",
      });
      const onchangeButton = (e) => {
        setCredientials({ ...credientials, [e.target.name]: e.target.value });
      };
      let navigate = useNavigate();

      const submitButton = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credientials.email,
            password: credientials.password,
          }),
        });
        
   
        const jso = await response.json();
        console.log(jso);
        if (jso.success) {
          //   props.showalert("success to login", "success");
          // save the auth token
          localStorage.setItem("token", jso.authToken);
          console.log("boyy pr jao");
  
           navigate("/body");
        }else{
            alert("please enter valid credientials ");
        }
      };
  return (
    <div className="container">
      <form onSubmit={submitButton}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email{" "}
          </label>
          <input
            type="email"
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
          />
        </div>

        <button
          disabled={!credientials.email || credientials.password.length < 5}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
