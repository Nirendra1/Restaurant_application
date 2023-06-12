import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { Alert } from "bootstrap";
// import { Link } from "react-router-dom";
const RestaurantCreate = () => {


    const [Name, setName] = useState();
    const [Email, setEmail] = useState();
    const [Ratting, setRatting] = useState();
    const [Adress, setAdress] = useState();


    // var that = this.RestaurantList;
    // const[data,setdata]=useState();
    // console.log('Name', Name);
    // console.log('Email', Email);
    // console.log('Ratting', Ratting);
    // console.log('Adress', Adress);
    // const handlesubmit=(e)=>{
    // alert("add menu")
    // }


    function handlesubmit() {
        // Alert("Add manu")
        console.log({ Name, Email, Ratting, Adress });
        let data = { Name, Email, Ratting, Adress }
        console.log(data);
        axios.post("http://localhost:3000/posts", {


            // method:"POST",
            // headers:{
            //     "Accept":"JSON",
            //     "Content-type":"JSON"
            // },

            name: Name,
            email: Email,
            rating: Ratting,
            address: Adress
            // body:JSON.stringify(data)?
            // let page= data
        }).then((res) => {
            // console.log("res")
            // res.JSON().then((res)=>{
            console.log("res", res)
            alert(" Restaurant has been Added ")
            // console.log(res.json(res));
            // })
        })
    }
    // const handlesubmit = (e) => {
    // alert("success add");
    // e.prevantDefault();
    // const post = {
    // name: Name, email: Email, ratting: Ratting, adress: Adress

    // }

    // fetch('http://localhost:3000/posts', post)
    // name:data.name
    // .then((res) => {
    // res.json().then((res) => {
    //    setdata(res.data.Name)
    // console.log(res.data.Email)
    // })
    // })
    // }
    // console.log(data)
    // console.log(props.data);
    return (
        <>
            <div>
                {/* <div className="resto"> */}
                <h1 className="create">Create Restaurant</h1>
                
                {/* {data&&data.map((index,item)=>{ */}
                {/* //     */}
                {/* // <div key={index}> */}
                {/*  */}
                {/* </div> */}
                {/* // })} */}

                <div className="resto">

                    <div className="pink">

                        <input type="text" id="Name" placeholder="Enter Food Name" onChange={(e) => setName(e.target.value)} />

                    </div>

                    <div className="tom">

                        <input type="text" id="Email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />

                    </div>

                    <div className="com">

                        <input type="text" id="Ratting" placeholder="Enter Ratting" onChange={(e) => setRatting(e.target.value)} />

                    </div>

                    <div className="sam">

                        <input type="text" id="Adress" placeholder="Enter Adress" onChange={(e) => setAdress(e.target.value)} />
                        {/* <button>click</button> */}

                    </div>

                    {/* </div> */}
                    {/* <input type="submit"submit/>             */}
                    {/* <Link to="RestaurantList"> */}
                    <div><button onClick={handlesubmit}>submit</button></div>

                    <Link to="/Navbar">
                        <button className="up">Back</button>
                    </Link>

                </div>

            </div>

        </>

    )

}

export default RestaurantCreate;