import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <div className="app">
                <li className="navbar-lam">
                    
                    <ul><Link className="name1" to="/"> Home</Link></ul>
                    <ul><Link className="name7" to="/signup">Logout</Link></ul>

                    <ul><Link className="name3" to="/create">Create</Link></ul>
                    <ul ><Link className="name2" to="/list">List</Link></ul>
                    <ul><Link className="name4" to="/search">Search</Link></ul>
                    <ul><Link className="name5" to="/update">update</Link></ul>
                    
                    {/* <ul><Link className="name7" to="/logout">Logout</Link></ul> */}
                </li>
            </div>

        </>
    )
}
export default Navbar;