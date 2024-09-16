

import React from "react";
import {Routes,Route} from 'react-router-dom'
import './App.css'
import LandingPage from "./stores/pages/landingpage";
import MobilePage from "./stores/pages/MobilePage";
import ComputerPage from "./stores/pages/ComputerPage";

import FridgePage from "./stores/pages/FridgePage";
import FurniturePage from "./stores/pages/Furniture";
import KitchenPage from "./stores/pages/Kitchen";
import WatchPage from "./stores/pages/Watchpage";
import WomenPage from "./stores/pages/WomenPage";
import MenPage from "./stores/pages/MenPage";
import MobileSingle from './Singles/MobilesSingle'
import  {UserCart}  from "./stores/UsersCart";
import ComputerSingle from "./Singles/ComputerSingles";
import FridgeSingle from "./Singles/FridgeSingle";
import FurnitureSingle from "./Singles/FurnitureSingles";
export default function App(){
  return(
    <>
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path='/mobiles' element={<MobilePage />}></Route>
      <Route path="/computers" element={<ComputerPage />}></Route>
      <Route path="/fridge" element={<FridgePage />}></Route>
      <Route path="/furniture" element={<FurniturePage />}></Route>
      <Route path="/kitchen" element={<KitchenPage />}></Route>
      <Route path="/watch" element={<WatchPage />}></Route>
      <Route path="/women" element={<WomenPage />}></Route>
      <Route path="/men" element={<MenPage />}></Route>
      <Route path="/mobiles/:id" element={<MobileSingle/>}></Route>
      <Route path="/computers/:id" element={<ComputerSingle/>}></Route>
      <Route path="/cart" element ={<UserCart />}></Route>
      <Route path="/furniture/:id" element={<FurnitureSingle/>}></Route>
      <Route path="/fridge/:id" element={<FridgeSingle/>}></Route>
    </Routes>
    
    </>
  )
}