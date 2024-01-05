import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../Redux/Action";
import CustomModal from "./customModal";
import { Link } from "react-router-dom";

const Read = () =>{
const dispatch = useDispatch();
const [id, setId] = useState();

const [showpop, setShowpop] = useState(false);
const {user, loading} = useSelector((state) => state.app);

useEffect(() =>{
dispatch(showUser());
    },[])
if(loading){
    return (<h2>Loading</h2>)
}


    return(
<div>
{showpop && <CustomModal id={id} setShowpop={setShowpop} showpop={showpop}/> }
<h2>All Data</h2>

<div>
    {user &&
     user.map((ele)=> (
<div key={ele.id} className="card w-50 mx-auto mt-4 mb-4 my-2 text-center">
  <div className="card-body">
    <h5 className="card-title">{ele.name}</h5>
    <p className="card-text">{ele.email}</p>
    <p>{ele.age}</p>
    <p>{ele.gender}</p>
    <button className="btn btn-primary ms-3" onClick={() => [setId(ele.id), setShowpop(true)]}>View</button>

    <Link to={`/edit/${ele.id}`} className="btn btn-primary ms-3">Edit</Link>
    
    <Link onClick={() => dispatch(deleteUser(ele.id))} className="btn btn-primary ms-3">Delete</Link>
  </div>
</div>
     ))}

</div>

</div>

    );
}

export default Read;