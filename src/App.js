// import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Newhead";
import Foot from "./Component/Footer";
import Newpage from "./Component/Firstpage";
import Ran from "./Component/component2";
import Sunn from "./Component/Clock";
// import Dash from "./Pages/Dashboard";
import PrivateRote from "./Component/Privateroute";
import Test from "./Component/Tests";
import Signup from "./Component/Sign";
import Login from "./Component/Login";
import Userdetail from "./Component/userdetail";

function App() {
// const [ram, setRam] = useState(false);

// const login = () =>{
//   setRam(true);
// }
// const logout = () =>{
//   setRam(false);
// }
  return (
    <>
    
    <BrowserRouter>
      <Header/>
    
        <Routes>
          <Route path="/" element={<Newpage />} />
          <Route  path="/about" element={<Test/>} />
          <Route  path="/contact"  element={<Sunn/>}/>
          <Route  path="/signup"  element={<Signup/>}/>
          <Route  path="/login"  element={<Login  />}/>
          <Route  path="/userdetail"  element={<Userdetail/>}/>


       
        </Routes>
    
      <Foot />
    </BrowserRouter>
    </>
  );
}

export default App;
