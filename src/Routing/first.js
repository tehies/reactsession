import React, {useState} from "react";

const Login = ()=> {
    const[formValue, setFormValue]= useState({username:'', age:''});
    const[disable, setDisable]=useState('typing');

    const handleInput=(e)=>{
        const {name, value}= e.target;
        setFormValue({...formValue, [name]:value});
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();         
        console.log(formValue);   
        setDisable('submitted');
    
    }
return (
    <>
 <form className="login-form" onSubmit={handleSubmit}>
    <label>Enter your name 
            <input type="text" placeholder="FirstName" name="username" value={formValue.username} onChange={handleInput} re/>
            </label><br></br>

            <label>Enter your Age
            <input type="number" placeholder="Age" min="0" name="age" value={formValue.age}  onChange={handleInput}/>
            </label><br></br>

            <label for="male">Male</label>
        <input type="radio" name="gender" id="male" value="male" checked/><br></br>
        <label for="female">Female</label>
        <input type="radio" name="gender" id="female" value="female"/><br></br>
        <button type="submit"
                disabled={formValue.username.length===0 || 
                    formValue.age.length===0 || 
                    disable==='submitted'
                }
            >Login</button>
        </form>
        </>
       );
    }
export default Login;