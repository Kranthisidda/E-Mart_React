import React from "react";
import { womanData } from "../data/woman";
import Navbar from "../componenets/navbar";
export default function WomenPage(){


    return(<>
    <Navbar />
    <div className="pageSection">
        {womanData.map((woman)=>{
            return (
                <div>
                <div className="pageImg">

                    <img src={woman.image} />
                </div>
                <div className="proModel">
                    {woman.brand},{woman.model}
                </div>
                </div>
            )
        })}
        </div>
    </>
    )
}