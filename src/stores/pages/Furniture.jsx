import React from "react";
import { furnitureData } from "../data/furniture";
import Navbar from "../componenets/navbar";
import { useState } from "react";
import {Link} from 'react-router-dom'
export default function FurniturePage(){

    const [products,setProducts] = useState([])
    function handleClick(name,event){
        if(event.target.checked){
            setProducts([...products,name])
        }
        else{
            setProducts(products.filter((item)=>item !== name))
        }

    }
    const filteredData = (products.length === 0 ? furnitureData:furnitureData.filter((item)=>products.includes(item.brand)))
    

    return(<>
    <Navbar />
    <div className="total-page">
    <div className="filters">
    {furnitureData.map((mobile)=>{
        return (
            <div className="filters-item">
            <input type="checkbox" onClick={(e)=>handleClick(mobile.brand,e)}></input>
            <label >{mobile.brand}</label>
            </div>
        )
    })}
    </div>
    <div className="pageSection">
        {filteredData.map((furniture)=>{
            return (
                <div>
                    <Link to={`/furniture/${furniture.id}`}>
                <div className="pageImg">
                
                    <img src={furniture.image} />
                </div>
                <div className="proModel">
                    {furniture.brand},{furniture.model}
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