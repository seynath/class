import "./App.css";
import {useState} from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Cal from "./components/Cal";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import Signup from "./pages/Signup";

function App() {
  // logic
  const [count, setCount] = useState(0);





  return (
    <BrowserRouter>
      <Header />
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cal" element={ <Cal/>}/>
        <Route path="/login" element={ <Login/>}/>
        <Route path="/posts" element={<Posts />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
