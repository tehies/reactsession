import React from 'react';
import './custommodal.css';
import { useSelector } from 'react-redux';


 const CustomModal = ({id,showpop,setShowpop}) => {

    const allUser = useSelector((state) => state.app.user);


    const singleUser = allUser.filter((ele) => ele.id === id);
    console.log("singlr", singleUser);

  return (
    <div className='modalBackground'>
   <div className='modalContainer'>
<button onClick={() => setShowpop(false)}>close</button>
<h2>{singleUser[0].name}</h2>
<p>{singleUser[0].email}</p>
<p>{singleUser[0].gender}</p>
<p>{singleUser[0].age}</p>
   </div>
    </div>
  );
};

export default CustomModal;
