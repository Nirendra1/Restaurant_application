import { useState } from "react";
import Navbar from "./Navbar";
import Signup from "./Signup";
// import Login from "./Login";
export default function useAuth(initialValue) {
    const [isAuth, setIsAuth] = useState(initialValue)

    return [isAuth, Login, Signup, Navbar]
}