import React,{ useState } from "react";
import "./form.css";
import { Link, useNavigate } from "react-router-dom";

const Signup =()=>{
    const history = useNavigate();
    const [formData, setFormData] = useState({ 
        name: '', 
        email: '', 
        password:''

    });
    const[data,setData] = useState([]);
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
        localStorage.setItem("lastname", JSON.stringify([...data, formData]));
        history('/login');
    
    }


return(
<>
<div className="container formContainer">
<form>
<label for="name">
Enter Your Name
<input type="text" id="name" name="name" onChange={getdata} required/>
</label>

<label for="email">
Enter Your Email
<input type="email" id="email" name="email" onChange={getdata} required/>
</label>

<label for="password">
Enter Your Password
<input type="password" id="password" name="password" onChange={getdata} required/>
</label>
<div className="random_button">
<button onClick={adddata}>Register Now</button>
<Link to="/login">Already User</Link>


</div>
</form>
</div>
</>
);


}

export default Signup;