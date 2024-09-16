import React from "react";
import { computerData } from "../data/computers";
import Navbar from "../componenets/navbar";
import { useState } from "react";
import {Link} from 'react-router-dom'

export default function ComputerPage(){

    const [products,setProducts] = useState([])
    function handleClick(name,event){
        if(event.target.checked){
            setProducts([...products,name])
        }
        else{
            setProducts(products.filter((item)=>item !== name))
        }

    }
    const filteredData = (products.length === 0 ? computerData:computerData.filter((item)=>products.includes(item.company)))
    

    return(<>
    <Navbar />
    <div className="total-page">
    <div className="filters">
    {computerData.map((mobile)=>{
        return (
            <div className="filters-item">
            <input type="checkbox" onClick={(e)=>handleClick(mobile.company,e)}></input>
            <label >{mobile.company}</label>
            </div>
        )
    })}
    </div>
    <div className="pageSection">
        {filteredData.map((computer)=>{
            return (
                <div>
                    <Link to={`/computers/${computer.id}`}>
                <div className="pageImg">

                    <img src={computer.image} />
                </div>
                <div className="proModel">
                    {computer.company},{computer.model}
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