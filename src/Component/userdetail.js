import React, {useEffect} from "react";

import {  useNavigate } from "react-router-dom";
const Userdetail = () => {

  const history = useNavigate();
  const removeuser = (e) => {
    e.preventDefault();
    localStorage.removeItem("userdata");
    history('/login');
      
    
  };

  useEffect(() => {
    let login = localStorage.getItem("userdata");
    if (!login) {
      history("/login");
    }
  });

  return (
    <>
      <div className="container">
<h1>user login</h1>
<button onClick={removeuser}>log out</button>
   
      </div>
    </>
  );
};
export default Userdetail;
