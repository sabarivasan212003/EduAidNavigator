import { useState } from "react";
function Register() {
    const [formData,setFormData]=useState({
        email : "",
        password : ""
})
const handleInput=(e)=>{
    // setFormData({
    //     ...formData,
    //     [e.target.name]:e.target.value
    // })
    let val=e.target.value;
    if(val.includes("@iam.neu.ai"))
    {
        console.log("")
    }
}
    return ( 
        <>
        <div>
            <form>
                <input type="email" name="email" value={formData.email} placeholder="Enter emsil" onChange={handleInput}></input>
                <input type="password" name="password" value={formData.password} placeholder="Enter password"></input>
            </form>
        </div>
        </>
     );
}

export default Register;