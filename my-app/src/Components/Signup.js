import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const Signup = () => {

    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [userpassword, setuserpassword] = useState([]);
    const [confirm, setconfirm] = useState([]);
    const navigate = useNavigate();

    async function Resto() {
 
        let item = { name, email, userpassword, confirm }
        // console.log(item)
        let result = await fetch("http://localhost:3000/posts",{
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "content-type": "application/json",
                "Accept": "application/json"
            }
        })
        result = await result.json()
        console.log("result",result )

        localStorage.setItem("name",result.name);
        localStorage.setItem("email",result.email)
        localStorage.setItem("confirm",result.confirm);
        localStorage.setItem("userpassword",result.userpassword);
        localStorage.setItem("signUp",result.email);

        if (result?.name == name && result?.email == email && result?.userpassword == userpassword) {
            Swal.fire({
                title: 'Successfully Submited !',
                text: 'You clicked the button.',
                icon: 'success',
                timer: 1500
            })

            navigate("/Login");

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email and Password is Not Valid !',
                // footer: '<a href="">Why do I have this issue?</a>',
                timer: 1500
            })
        }
    }
    return (
        <>
            <div>
                <div className="signup">
                    <div>SignUp</div>
                </div>
                <div>
                    <div>
                        <label className="na1">Name:</label>
                        <input className="na2" type="text" placeholder="Enter Your Name" id="Name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="email">
                        <label className="ram" >Email: </label>
                        <input className="email1" type="text" placeholder="Enter Email Id here " id="Email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="password">
                        <label className="tom">Password:</label>
                        <input className="password1" type="text" placeholder="Enter Password here" id="Password" onChange={(e) => setuserpassword(e.target.value)} />
                    </div>
                    <div className="cpassword">
                        <label className="top"> Confirm Password:</label>
                        <input className="cpassword1" type="text" placeholder="Enter password here again" id="comfirm password" onChange={(e) => setconfirm(e.target.value)} />
                    </div>
                </div>
                <button className="submit1" onClick={Resto}>Submit</button>
                {/* <button className="name7" onClick={log}>Logout</button> */}
            </div>
        </>
    )
}
export default Signup;