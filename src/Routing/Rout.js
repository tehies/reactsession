import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from '../Component/Clock';
import Login from './first';
const Demo = ()=> {
    return (
      <BrowserRouter>
        <Routes>

            <Route exact path="/" element={<Login />} />
            <Route  path="/welcome" element={< First/>} />
            
        </Routes>
      </BrowserRouter>
      
    );
  }
  export default Demo;