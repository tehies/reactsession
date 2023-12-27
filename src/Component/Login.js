import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

import "./form.css";
import { Link } from "react-router-dom";
const Login = () => {

  const history = useNavigate();
  const [formData, setFormData] = useState({ 
      name: '', 
      email: '',
      password:''

  });

  const getdata = (e) => {
      const {name,value} = e.target;
      setFormData(()=>{
          return{
              ...formData,
              [name]:value
          }
      })
  }
  const adddata = (e) => {
      e.preventDefault();
      const {email,password} = formData;
      const getdataarr = localStorage.getItem('lastname');
      if(getdataarr && getdataarr.length){
          const userdata = JSON.parse(getdataarr);
          const userlogin = userdata.filter((el,i)=>{
              return el.email === email && el.password === password
          });
          if(userlogin.length === 0){
             alert('Invalid User');
          }
          else{
            localStorage.setItem('userdata',JSON.stringify(userlogin));
            history('/userdetail');
          }
      }
  }

// const navigate = useNavigate();
useEffect(() => {
  let login = localStorage.getItem("userdata");
  if (login) {
    history('/userdetail');

  }
});


  return (
    <>
      <div className="container formContainer">
        <form>
        <label for="email">
Enter Your Email
<input type="email" id="email" name="email" onChange={getdata}  required/>
</label>

<label for="password">
Enter Your Password
<input type="password" id="password" name="password" onChange={getdata} required />
</label>
    <div className="random_button">
    <button onClick={adddata} > log in</button>
            <Link to="/signup">
              <button>Sign up</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
