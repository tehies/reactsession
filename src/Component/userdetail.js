import React, {useEffect, useState} from "react";
import axios from "axios";
import {  useNavigate, Outlet,  } from "react-router-dom";
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

  const [count, setCount] = useState([]);
  const [data, setData] = useState(false);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      console.log(response);
      const random = response.data;
      setCount(random);
      setData(true);
    });
  }, []);


  return (
    <>
  
<Outlet></Outlet>
      <div className="container">
<h1>user login</h1>
<ul>
          {count.map((vald) => (
            <div key={vald.id}>
            <li>{vald.name}</li>
            <li>{vald.username}</li>
            <li>{vald.email}</li>
            <li>{vald.phone }</li><br></br>
            </div>
          ))}
        </ul>
<button onClick={removeuser}>log out</button>
   
      </div>
    </>
  );
};
export default Userdetail;
