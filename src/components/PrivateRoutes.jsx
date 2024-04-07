import React from "react";
import {Outlet, Navigate} from 'react-router-dom';

export const PrivateRoutes = () =>{
    let user = true
    return(
        <>
        {user? <Outlet/> : <Navigate to='/login'/>}
        </>
    )
}