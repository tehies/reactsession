import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Update = () => {
const {id} = useParams();

const [updatedata, setUpdatedata] = useState();

const {user, loading} = useSelector((state) => state.app.user);


// useEffect(()=> {
//     if(id){
//         const singleUser = user.filter((ele) => ele.id === id);
//         setUpdatedata(singleUser);
//     }
// }, []);
console.log(updatedata);

  return (
    <div>
        <h2>Edit the data</h2>
    <form className="w-50 mx-auto my-5">
      <div>
        <label className="form-label">Name</label>
        <input type="text" className="form-control" name="name" 
        value={updatedata && updatedata[0].name}
        // onChange={getUserdata}
         />
      </div>
      <div className="mb-3">
        <label  className="form-label">Email</label>
        <input type="email" className="form-control" name="email" id="exampleInputPassword1"
         value={updatedata && updatedata[0].email}
         //onChange={getUserdata}
          />
      </div>
      <div className="mb-3">
        <label className="form-check-label">Age</label>
        <input type="text" className="form-control" name="age"
        value={updatedata && updatedata[0].age}
        // onChange={getUserdata}
         />
      </div>
    
      <div className="mb-3">
      <input className="form-check-input" type="radio" name="gender" value="Male" 
     checked = {updatedata && updatedata[0].gender === 'Male'}
      //onChange={getUserdata} 
      />
      <label className="form-check-label">
     Male
      </label>
    </div>
    <div className="mb-3">
      <input className="form-check-input" type="radio" name="gender" value="Female" 
        checked = { updatedata && updatedata[0].gender === 'Female'}
      //onChange={getUserdata}
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