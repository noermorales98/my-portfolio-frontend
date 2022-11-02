import React from "react";
import Login from "./admin-page/Login";
import Admin from "./admin-page/Admin";
import { Route, Routes } from 'react-router-dom';
import useToken from "./useToken";

function Configpage() {
    const { token, setToken } = useToken();
    if (!token) {
        return <Login setToken={setToken} />
    }
    return (
        <div className="wrapper">
            <Routes>
                <Route exact path="/" element={<Admin />} />
            </Routes>
        </div>
    )
}

export default Configpage;