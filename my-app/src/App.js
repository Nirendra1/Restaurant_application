import React from "react";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import RestaurantList from "./Components/RestaurantList";
import RestaurantCreate from "./Components/RestaurantCreate";
import RestaurantSearch from "./Components/RestaurantSearch";
import RestaurantUpdate from "./Components/RestaurantUpdate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import PrivateNavbar from "./Components/PrivateNavbar";
import Logout from "./Components/Logout";
// const localValue = localStorage.get(Storage.name)
// console.log("storrage",localValue)
let userid = localStorage.getItem("localstorage_User_Id") == null ? false : true;
const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={userid ? <Navbar /> : <Signup />} />
            <Route path="/login" element={userid ? <Navbar /> : <Login />} />
            <Route element={<PrivateNavbar />} >
              <Route path="/navbar" element={<Navbar />} />
              <Route path="/home" element={<Home />} />
              <Route path="/list" element={<RestaurantList />} />
              <Route path="/create" element={<RestaurantCreate />} />
              <Route path="/search" element={<RestaurantSearch />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/update/:id" element={<RestaurantUpdate />} />
            </Route>
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}
export default App;
