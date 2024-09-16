import React from "react";
import { menData } from "../data/men";
import Navbar from "../componenets/navbar";
export default function MenPage(){


    return(<>
    <Navbar />
    <div className="pageSection">
        {menData.map((men)=>{
            return (
                <div>
                <div className="pageImg">

                    <img src={men.image} />
                </div>
                <div className="proModel">
                    {men.brand},{men.model}
                </div>
                </div>
            )
        })}
        </div>
    </>
    )
}