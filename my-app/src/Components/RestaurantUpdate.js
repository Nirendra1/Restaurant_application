// import { Button } from "bootstrap";
// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import uuid from 'uuid'
// import axios from "a/xios"
const RestaurantUpdate = () => {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Rating, setRating] = useState('');
    const [Address, setAddress] = useState();
    const [data, setdata] = useState([]);
    const { id } = useParams();

    let uniqueId = new Date().toISOString()

    const getByIdAPIURL = `http://localhost:3000/posts/`

    const getProdutData = async () => {
        try {
            fetch(getByIdAPIURL + id).then((res) => res.json().then((data) => {
                console.log(data, "response")

                setName(data.name)
                setEmail(data.email)
                setRating(data.rating)
                setAddress(data.address)

                console.log(id, "get id from list")
            }))
 

        } catch (error) {
            console.log(error)
        }
    }
    console.log(Email, "uniqueId");
    useEffect(() => {
        getProdutData()
    }, [])





    // const postDelete = (_id) => {

    //     axios.delete(`http://localhost:3000/posts/`, {
    //         params: {
    //             id: _id
    //         }
    //     })
    //         .then((result) => {
    //             result.json().then((resp) => {
    //                 console.log(resp, 'resp')
    //             })
    //         }).catch((err) => {
    //             console.log(err)
    //         })
    // }
    function handlesubmit() {

alert("update succesfully");

        console.log(id, "idddd")

        fetch(id ? "http://localhost:3000/posts/" + id : 'http://localhost:3000/posts/', {

            method: id ? "put" : "post",
            headers: {
                "content-type": "application/json",
                "Access-control-allow-original": "*",

            },
            body: JSON.stringify({
                name: Name,
                email: Email,
                rating: Rating,
                address: Address
            })
        }).then(res => res.json().then((data) => {
            setdata(data)
        })).catch("e", e => {
            console.log("e", e)
        })
    }
    return (
        <>
        <div className="upd">
            <h1>Update Restaurant</h1>
            <div className="forms">
                <div className="pink">
                    <input type="text" id="Name" placeholder="Enter Food Name" value={Name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="tom">
                    <input type="text" id="Email" placeholder="Enter Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="com">
                    <input type="text" id="Rating" placeholder="Enter Ratting" value={Rating} onChange={(e) => setRating(e.target.value)} />
                </div>
                <div className="sam">
                    <input type="text" id="Address" placeholder="Enter Adress" value={Address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <button onClick={handlesubmit}>Update</button>
                {/* <button onClick={postDelete}>Delete</button> */}
                {/* <button className="up">Back</button> */}
            </div>

            </div>
            <Link to="/Navbar">
            <button className="bak">Back</button>
            </Link>
        </>
    )
}
export default RestaurantUpdate;