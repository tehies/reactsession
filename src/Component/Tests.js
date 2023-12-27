import React, { useState } from "react";
import axios from "axios";

const Demoss = () =>{

    const data = {firstname : "", lastname: ""};
    const [indata, setIndata] = useState(data);

    const handledata = (e) =>{
        e.preventDefault()
        setIndata({...indata,[e.target.name]:e.target.value})
    }
    const frd ={first: 'dsd', last: "jhdsgg" };

  const  handlesubmit = (e) =>{
    e.preventDefault()
    axios.post('https://jsonplaceholder.typicode.com/users', frd).then((response) => {
     console.log(response);
      });
  }
  
  const  handleupdate = (e) =>{
    e.preventDefault()
    axios.put('https://jsonplaceholder.typicode.com/users/1', indata).then((response) => {
        console.log(response);
      });
  }
  const  handledelete = (e) =>{
    e.preventDefault()
    axios.delete('https://jsonplaceholder.typicode.com/users/1', indata).then((response) => {
        console.log(response);
      });
  }

    return(
<>
<label>First Name:</label>
<input type="text" name="firstname" value={indata.firstname} onChange={handledata}></input>
<label>Last Name:</label>
<input type="text" name="lastname" value={indata.lastname} onChange={handledata}></input>

<button onClick={handlesubmit}>Sumbit</button>
<button onClick={handleupdate}>update</button>
<button onClick={handledelete}>Delete</button>
</>
 

    )

}

export default Demoss;