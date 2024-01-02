import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { createUser } from "../Redux/Action";
import { useNavigate } from "react-router-dom";

const Create =() =>{

    const [ user, setUser] = useState({});
const dispatch = useDispatch();
const navigate = useNavigate();
const getUserdata = (e) =>{
    setUser({...user, [e.target.name] : e.target.value})

};

const handlesubmit = (e) => {
e.preventDefault();
console.log("users...", user);
    dispatch(createUser(user));
    navigate("/read");
};


return(
    <div>
<form className="w-50 mx-auto my-5" onSubmit={handlesubmit}>
  <div>
    <label className="form-label">Name</label>
    <input type="text" className="form-control" name="name"  onChange={getUserdata}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Email</label>
    <input type="email" className="form-control" name="email" id="exampleInputPassword1" onChange={getUserdata} />
  </div>
  <div className="mb-3">
    <label className="form-check-label">Age</label>
    <input type="text" className="form-control" name="age" onChange={getUserdata} />
  </div>

  <div className="mb-3">
  <input className="form-check-input" type="radio" name="gender" value="Male" onChange={getUserdata} />
  <label className="form-check-label">
 Male
  </label>
</div>
<div className="mb-3">
  <input className="form-check-input" type="radio" name="gender" value="Female" onChange={getUserdata} />
  <label className="form-check-label" >
Females
  </label>
</div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
)

}

export default Create;