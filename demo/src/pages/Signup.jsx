import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    // alert("Signup successful");
    console.log({ username: username, email: email, password: password });


    // console.log(username, email, password);

    const response = await axios.post('http://localhost:8003/signup', {username1: username, email1: email, password1: password})

    console.log(response.data);
    if(response.data === 'Signup successful'){
      navigate('/login');
    }






  };
  return (
    <div className="flex justify-center items-center h-screen">
      {/* Signup using username, email password */}

      <form onSubmit={handleSignup} className=" border-2 border-black p-10 rounded-xl">
        <label>Username:</label>
        <input 
        placeholder="Enter your username"
        type="text" 
        required 
        value={username}
        onChange={
          function updateValue(event) {
            setUsername(event.target.value)

          }}

        />
        <br />
        <label>Email:</label>
        <input type="email" 
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <label>Password:</label>
        <input type="password" 
        required 
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <button className="bg-green-300 p-2" type="submit">Signup</button>
        <br />
      </form>
    </div>
  );
}

export default Signup;




// {
//   "name": "neo",
//   "age": 30
// }