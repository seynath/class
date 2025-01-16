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
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
      <form onSubmit={handleLogin}>

      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full px-3 py-2 mb-4 border rounded"
        />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full px-3 py-2 mb-4 border rounded"
        />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full font-bold"
        >
        Login
      </button>
      <p className="mt-4 text-center">
        Don't have an account?{" "}
        <button
          onClick={gotoSignupPage}
          className="text-blue-600 hover:underline"
          >
          Sign up
        </button>
      </p>
      </form>
    </div>
  </div>
    // <div className="flex flex-col justify-center items-center h-screen gap-3">
    //   <input
    //     type="email"
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //     placeholder="Email"
    //   />
    //   <input
    //     type="password"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //     placeholder="Password"
    //   />
    //   <button onClick={handleLogin}>Login</button>
    //   <button onClick={gotoSignupPage}>Signup</button>
    // </div>
  );
}

export default Login;
