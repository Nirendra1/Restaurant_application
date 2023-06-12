import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const RestaurantSearch = () => {
    const [data, setdata] = useState([]);
    const [searchApiData, setsearchApiData] = useState([]);
    const [filterval, setfilterval] = useState([]);

    useEffect(() => {
        const fetchdata = () => {
            fetch("http://localhost:3000/posts/")
                .then(Response => Response.json())
                .then(json => {
                    setdata(json)
                    setsearchApiData(json)
                })
        }
        fetchdata();
    }, [])

    const handlefilter = (e) => {

        if (e.target.value == ' ') {

            setdata(searchApiData)

        } else {

            const FilterResult = searchApiData.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))

            setdata(FilterResult)

            // console.log(FilterResult)
        }

        setfilterval(e.target.value);

    }

    return (
        <>
            <div>
                <h1 className="search">Restaurant Search</h1>
                <div className="input">
                    <input type="text" value={filterval} placeholder="Search...." onChange={(e) => handlefilter(e)} />
                </div>
                {/* <table className="table table-striped"> */}
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Adress</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) => {
                                return (
                                    <tr>
                                        <th key={item}>{item.id}</th>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.rating}</td>
                                        <td>{item.address}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <Link to="/Navbar">
                <button className="bak">Back</button>
            </Link>
        </>
    )
}
export default RestaurantSearch;