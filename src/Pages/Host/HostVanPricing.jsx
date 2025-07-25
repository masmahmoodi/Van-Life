import React from "react"
import { useNavigate, useOutletContext } from "react-router-dom"
export default function HostVanPricing({id}){
    const data = useOutletContext()
    console.log(data)
    return (
        <h1>{data.price}</h1>
    )
}





