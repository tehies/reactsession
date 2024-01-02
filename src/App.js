// import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Newhead";
import Foot from "./Component/Footer";
import Newpage from "./Component/Firstpage";
import Create from "./Pages/Dashboard";
import Sunn from "./Component/Clock";
import Test from "./Component/Test";
import Signup from "./Component/Sign";
import Login from "./Component/Login";
import Userdetail from "./Component/userdetail";
import Read from "./Pages/Read";
import Update from "./Pages/Update";

function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
    
        <Routes>
          <Route path="/" element={<Newpage />} />
          <Route  path="/about" element={<Test/>}/>
          <Route  path="/contact"  element={<Sunn/>}/>
          <Route  path="/signup"  element={<Signup/>}/>
          <Route  path="/login"  element={<Login  />}/>
          <Route  path="/userdetail"  element={<Userdetail/>}/>
          <Route  path="/create"  element={<Create />}/>
          <Route  path="/read"  element={<Read />}/>
          <Route exact path="/edit/:id"  element={<Update />}/>
        </Routes>
    
      <Foot />
    </BrowserRouter>
    </>
  );
}

export default App;
