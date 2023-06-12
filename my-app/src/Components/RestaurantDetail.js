import React, { useState } from "react";
import { useEffect } from "react";
// const [data,setdata]=useState('');
const RestaurantDetail = () => {
    const [data, setdata] = useState();
    useEffect(() => {
        fetch('http://localhost:3000/posts')
            .then((res) => {
                res.json().then((res) => {
                    setdata(res)
                })
            })
    }, []) 
    console.log(data);
    return (
        <>
            <h1>api call fundamental</h1>
            {data && data.map((index) => {
                (
                    <div key={index.id}>
                        <div>{index.name}</div>
                    </div>
                )
            })}
        </>
    )
}
export default RestaurantDetail;