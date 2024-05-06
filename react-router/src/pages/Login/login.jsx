import React, { useState } from "react";
import { Button } from "../../Components/Button/Button";
import { useLoginContext } from "../../context/LoginContext";
import { useNavigate } from "react-router-dom";



const LoginForm = () => {
    
    const navigate = useNavigate();
  const {dispatch} = useLoginContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
 

 
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email ||!password) {
      setError("Please fill in all fields");
    } else {
        if(email=="admin@admin.com" && password=="admin"){
          dispatch({
            type: 'SET_LOGGEDIN'
          });
          localStorage.setItem("logged", "true"); 
          navigate("/");


          
        }
    }
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label
          className="form-label"
          htmlFor="email"
          aria-label="Email"
        >
          EMAIL
        </label>
        <input
          id="email"
          type="email"
          placeholder="email@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-required="true"
        />
      </div>
      <div>
        <label
          className="form-label"
          htmlFor="password"
          aria-label="Password"
        >
          PASSWORD
        </label>
        <input
          id="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          aria-required="true"
        />
      </div>
      {error && <div className="error">{error}</div>}
      <Button label="Submit" onClick={handleSubmit} />
    </form>
  );
};

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
      
    </div>
  );
};

export default Login;