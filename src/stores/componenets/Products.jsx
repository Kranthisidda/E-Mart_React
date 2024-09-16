import React from "react";
import Mobiles from "./mobiles";
import Computers from "./computers";
import Ac from "./Ac";
import Men from "./Men";
import Watch from './Watch'
import Woman from "./Woman";
import Furniture from './Furniture'
import Fridge from "./Fridge";
import Kitchen from './Kitchen'
export default function Products(){
    return(
        <div><Mobiles />
        <Computers />
        <Ac />
        <Men />
        <Watch />
        <Woman />
        <Kitchen />
        <Fridge />
        <Furniture />
        </div>
    )
}