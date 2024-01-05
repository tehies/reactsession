import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../Redux/Action';

const Update = () => {
const {id} = useParams();
const dispatch = useDispatch();
const navigate = useNavigate();

const [updatedata, setUpdatedata] = useState();

const { user, loading } = useSelector((state) => state.app);

console.log("bindu", user);
useEffect(()=> {
    if(id){
        const singleUser = user.filter((ele) => ele.id === id);
        setUpdatedata(singleUser[0]);
    }
}, []);
const newdata = (e) =>{
  setUpdatedata({...updatedata, [e.target.name] : e.target.value})
}
const handleSubmit= (e) =>{
  e.preventDefault();
dispatch(updateUser(updatedata));
navigate("/read");
}
  return (
    <div>
        <h2>Edit the data</h2>
    <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
      <div>
        <label className="form-label">Name</label>
        <input type="text" className="form-control" name="name" 
        value={updatedata && updatedata.name}
        onChange={newdata}
         />
      </div>
      <div className="mb-3">
        <label  className="form-label">Email</label>
        <input type="email" className="form-control" name="email" id="exampleInputPassword1"
         value={updatedata && updatedata.email}
         onChange={newdata}
          />
      </div>
      <div className="mb-3">
        <label className="form-check-label">Age</label>
        <input type="text" className="form-control" name="age"
        value={updatedata && updatedata.age}
        onChange={newdata}
         />
      </div>
    
      <div className="mb-3">
      <input className="form-check-input" type="radio" name="gender" value="Male" 
     checked = {updatedata && updatedata.gender === 'Male'}
      onChange={newdata} 
      />
      <label className="form-check-label">
     Male
      </label>
    </div>
    <div className="mb-3">
      <input className="form-check-input" type="radio" name="gender" value="Female" 
        checked = { updatedata && updatedata.gender === 'Female'}
      onChange={newdata}
       />
      <label className="form-check-label" >
    Females
      </label>
    </div>
    
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  )
}

export default Update;