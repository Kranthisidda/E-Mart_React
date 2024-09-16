import React, { useState } from "react";
import { mobileData } from "../data/mobiles";
import Navbar from "../componenets/navbar";
import { Link } from "react-router-dom";
export default function MobilePage(){

    const [products,setProducts] = useState([])
    function handleClick(name,event){
        if(event.target.checked){
            setProducts([...products,name])
        }
        else{
            setProducts(products.filter((item)=>item !== name))
        }

    }
    const filteredData = (products.length === 0 ? mobileData:mobileData.filter((item)=>products.includes(item.company)))
    return(<>
    <Navbar />
    <div className="total-page">
    <div className="filters">
    {mobileData.map((mobile)=>{
        return (
            <div className="filters-item">
            <input type="checkbox" onClick={(e)=>handleClick(mobile.company,e)}></input>
            <label >{mobile.company}</label>
            </div>
        )
    })}
     
    </div>
    <div className="pageSection">
        {filteredData.map((mobile)=>{
            return (
                <div>
                    <Link to={`/mobiles/${mobile.id}`}>
                <div className="pageImg">

                    <img src={mobile.image} />
                </div>
                <div className="proModel">
                    {mobile.company},{mobile.model}
                </div>
                </Link>
                </div>
            )
        })}
        </div>
        </div>
    </>
    )
}