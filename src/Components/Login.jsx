import{ useState, React, useEffect }from 'react'
import jwt_decode from 'jwt-decode';
import { useNavigate  } from "react-router-dom";


export default function Login() {

      const navigate = useNavigate();

      useEffect(() => {
        const jwt = localStorage.getItem('token');
        if (jwt) {
          const decode = jwt_decode(jwt);
          if ((decode.exp*1000) > Date.now()) {
            navigate('/body')
          } 
        }
      }, [])

      const [credientials, setCredientials] = useState({
        email: "",
        password: "",
      });
      const onchangeButton = (e) => {
        setCredientials({ ...credientials, [e.target.name]: e.target.value });
      };

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
         
        const result = await response.json(); 
        if (result.success) {  
          localStorage.setItem("token", result.authToken);
          if (result.permission == 1)
            navigate('/admin') 
          else
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
