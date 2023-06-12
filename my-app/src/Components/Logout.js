import React from "react";
const Logout = () => {

    function log() {

        localStorage.removeItem("signup")
        window.location.reload()

    }
    return (
        <>
            <div>
                <button onClick={log}>Logout</button>
            </div>
        </>
    )
}
export default Logout;