// import { getSuggestedQuery } from "@testing-library/react";
// import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const RestaurantList = () => {
    const [data, setdata] = useState()
    const navigate = useNavigate()


    useEffect(() => {


        // fetch("http://localhost:3000/posts").then((res) => {
        //     res.json().then((res) => {
        //         setdata(res)
        //     })
        // })
        getusers();
    }
        , [])

    function getusers() {

        fetch("http://localhost:3000/posts").then((res) => {
            res.json().then((res) => {
                setdata(res)
            })
        })
        // getusers();
    }
    console.log(data)
    const update = (id) => {
        navigate(`/update/${id}`)
        console.log(id, 'ok')
    }


    function deleteuser(id) {
        fetch(`http://localhost:3000/posts/${id}`, {
            method: "DELETE",
        }).then((resp) => {
            resp.json().then((resp) => {
                console.log(resp)
                getusers()
                // console.log(data)
            })
        })
    }

    return (
        <>
            <h1 className="rest">Restaurant List</h1>
            <ul>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Address</th>
                            <th scope="col">Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((item, index) => (
                            <tr>

                                <th key={index}>{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.rating}</td>
                                <td>{item.address}</td>
                                <td className="edit" onClick={() => update(item.id)}><i class="fa-solid fa-pen-to-square"></i></td>
                                <td className="delete" onClick={() => deleteuser(item.id)}>
                                    <i class="fa-solid fa-trash"></i>
                                </td>
                            </tr>
                        ))}

                        {/* <Link to="/">       */}
                        {/* <button className="back">Back</button> */}
                        {/* </Link> */}
                    </tbody>
                </table>
            </ul>

            <Link to="/Navbar">
                <button className="Back"> Back</button>
            </Link>
        </>
    )
}
export default RestaurantList;