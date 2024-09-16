import React from "react";
import { kitchenData } from "../data/kitchen";
import Navbar from "../componenets/navbar";
export default function KitchenPage(){


    return(<>
    <Navbar />
    <div className="total-page">
    <div className="filters">
    {kitchenData.map((k)=>{
        return (
            <div className="filters-item">
            <input type="checkbox" ></input>
            <label>{k.brand}</label>
            </div>
        )
    })}
     
    </div>
    <div className="pageSection">
        {kitchenData.map((Kitchen)=>{
            return (
                <div>
                <div className="pageImg">

                    <img src={Kitchen.image} />
                </div>
                <div className="proModel">
                    {Kitchen.brand},{Kitchen.model}
                </div>
                </div>
            )
        })}
        </div>
        </div>
    </>
    )
}