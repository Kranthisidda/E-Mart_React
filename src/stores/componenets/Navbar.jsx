import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

export default function Navbar(){
    const {cartItems} = useCart()
    return(
        <>
        <div className="navSection">
            <Link to='/'>
            <div className="title"><h2>E-Mart</h2>
            </div></Link>
            
            <div className="search">
            <input type="text" placeholder="search..." />
            </div>
            
            <div className="user">
                <div className="user-deatails">SignIn/Signup</div>
                <Link to='/cart'><div className="cart">Cart{cartItems.length ?  cartItems.length:null}</div></Link>
                
            </div>
            </div>
            <div className="subMenu">
                <ul>
                    <Link to='/mobiles'><li>Mobiles</li></Link>
                    <Link to='/computers'><li>Computers</li>
                    </Link>
                    <Link to='/fridge'><li>Fridge</li></Link>
                
                    <Link to='/furniture'><li>Furniture</li></Link>
                    <Link to='/kitchen'><li>Kitchen</li></Link>
                    <Link to='/watch'><li>Watch</li></Link>
                    <Link to='/women'><li>Women</li></Link>
                    <Link to='/men'><li>Men</li></Link>
                </ul>
            </div>
            
            </>
    )
}