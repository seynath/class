import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validateEmailAndPassword = (email, password) => {
    if (email === "" || password === "") {
      alert("Please enter email and password");
      return false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Please enter a valid email");
      return false;
    } else {
      return true;
    }
  };

  const handleLogin = async  (event) => {
    event.preventDefault();
    console.log({ email: email, password: password });

    const loginValidity = validateEmailAndPassword(email, password);
    if (!loginValidity) {
      return;
    }

    const response = await axios.post('http://localhost:8003/login', {email: email, password: password})
    console.log(response.data);
    if(response.data === 'Login successful'){
      navigate('/');
    } else {
      alert('Login failed');
    }
    // alert("Login successful");
    // navigate("/");
  };

  const gotoSignupPage = () => {
    navigate("/signup");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={gotoSignupPage}>Signup</button>
    </div>
  );
}

export default Login;
