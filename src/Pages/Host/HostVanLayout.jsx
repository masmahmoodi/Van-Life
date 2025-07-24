import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function HostVanLayout(){
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return(
        <>
        <Outlet />
         <nav className="host-nav">
            <NavLink style={({isActive}) => isActive ? activeStyles : null} to="details">Detials</NavLink>
            <NavLink style={({isActive}) => isActive ? activeStyles : null} to="pricing">Pricing</NavLink>
            <NavLink style={({isActive}) => isActive ? activeStyles : null} to="products">Products</NavLink>
         </nav>
          
        </>
    )
}