import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AboutUs from "./Nav Tabs/AboutUs";
import Contact from "./Nav Tabs/Contact";
import Home from "./Nav Tabs/Home";
import Login from "./Nav Tabs/Login";
import PageNotFound from "./Nav Tabs/NotFound";
import Service from "./Nav Tabs/Services";
import Ulogin from "./Nav Tabs/Ulogin";
const App=()=>{
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <div className="container-fluid">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav" style={{fontSize:"20px", fontWeight:"bold"}}>
                        <li className="nav-item"><Link className="nav-link active text-white" aria-current="page" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/aboutus">About Us</Link></li>
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/service">Service</Link></li>
                        <li className="nav-item"><Link className="nav-link active " aria-current="page" to="/contact">Contact</Link></li>
                        <li className="nav-item float-right"><Link className="nav-link active  text-dark" aria-current="page" to="/login">Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/aboutus" element={<AboutUs/>}></Route>
            <Route path="/service" element={<Service/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/ulogin" element={<Ulogin/>}></Route>
            <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
        
        </>
    )
}
export default App;