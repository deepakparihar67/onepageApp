import React from "react";
import { useLocation } from "react-router-dom";
const  PageNotFound=()=>{
    let loc=useLocation();
    return(
        <>
        <h1>{loc.pathname}  UserHome Component is running...</h1>
        </>
    )
}
export default PageNotFound;