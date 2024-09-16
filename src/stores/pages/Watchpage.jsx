import React from "react";
import { watchData } from "../data/watch";
import Navbar from "../componenets/navbar";
export default function WatchPage(){


    return(<>
    <Navbar />
    <div className="pageSection">
        {watchData.map((watch)=>{
            return (
                <div>
                <div className="pageImg">

                    <img src={watch.image} />
                </div>
                <div className="proModel">
                    {watch.brand},{watch.model}
                </div>
                </div>
            )
        })}
        </div>
    </>
    )
}