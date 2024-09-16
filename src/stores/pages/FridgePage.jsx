import React from "react";
import { fridgeData } from "../data/fridge";
import Navbar from "../componenets/navbar";
import { useState } from "react";
import {Link} from 'react-router-dom'

export default function FridgePage(){
    const [products,setProducts] = useState([])
    function handleClick(name,event){
        if(event.target.checked){
            setProducts([...products,name])
        }
        else{
            setProducts(products.filter((item)=>item !== name))
        }

    }
    const filteredData = (products.length === 0 ? fridgeData:fridgeData.filter((item)=>products.includes(item.brand)))
    



    return(<>
    <Navbar />
    <div className="total-page">
    <div className="filters">
    {fridgeData.map((mobile)=>{
        return (
            <div className="filters-item">
            <input type="checkbox" onClick={(e)=>handleClick(mobile.brand,e)}></input>
            <label >{mobile.brand}</label>
            </div>
        )
    })}
    </div>
    <div className="pageSection">
        {filteredData.map((fridge)=>{
            return (
                <div>
                    <Link to={`/fridge/${fridge.id}`}>
                <div className="pageImg">

                    <img src={fridge.image} />
                </div>
                <div className="proModel">
                    {fridge.brand},{fridge.model}
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