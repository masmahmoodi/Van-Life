import React from "react";
import {Link} from "react-router-dom"
export default function Vans(){
    const [vans,setVan] = React.useState([])

    React.useEffect(()=>{
        fetch("/api/vans")
        .then(res=> res.json())
        .then(data => setVan(data.vans))
    },[])
     
   const vanElements = vans.map(van => (
        <div key={van.id} className="van-tile">
           <Link to={`/vans/${van.id}`}><img src={van.imageUrl} /></Link>
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
    ))
    return(
      <div className="van-list-container">
        <h1>Explore our vans opions</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}