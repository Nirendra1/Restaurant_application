import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";

const Login = () => {
    // const [name, setName] = useState([])
    const [email, setEmail] = useState([]);
    const [userpassword, setuserpassword] = useState([]);

    const navigate = useNavigate()
    async function handlesubmit(e) {
        e.preventDefault();
        let item = {
            email: email,
            password: userpassword
        }
        console.log("item", item)
        if (item.email && item.password) {
            let result = await fetch("http://localhost:3000/posts", {
                method: "POST",
                body: JSON.stringify(item),
                headers: {
                    "content-type": "application/json",
                    "Accept": "application/json"
                }
            })
            result = await result.json()
            console.log("result", result)
            localStorage.setItem('password', result.password);
            localStorage.setItem('localstorage_User_Id', result.id);
            if (result?.email == email) {
                Swal.fire({
                    title: 'Successfully Submited !',
                    text: 'You clicked the button.',
                    icon: 'success',
                    timer: 1500,
                })
                navigate("/Navbar");
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'data does not found!',
                    timer: 1500
                })

            }
        }

    }
    return (

        <>
            <div className="login">Login</div>
            <div className="log">
                <label className="login1">Email: </label>
                <input className="login2" type="text" placeholder="Enter Email id here" id="Email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="pa">
                <label className="pass1">Password: </label>
                <input className="pass2" type="text" placeholder="Enter Password here" id="Password" onChange={(e) => setuserpassword(e.target.value)} />
            </div>
            <div className="button1">

                <button className="button" onClick={handlesubmit}>Login</button>

            </div>
            <div className="new">
            </div>
        </>

    )
}

export default Login;