import React from "react";
import { useParams } from "react-router-dom";
import { mobileData } from "../stores/data/mobiles";
import Navbar from "../stores/componenets/navbar";
import { useCart } from "../stores/Context/CartContext";

export default function MobileSingle() {
  const { id } = useParams();
  
  // Find the product by matching the id from the URL
  const product = mobileData.find((item) => item.id === id);

  // Correctly destructure the useCart hook
  const { addToCart, cartItems } = useCart();

  // Check if the product exists (for safety in case id doesn't match)
  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <Navbar />
      <div className="ind-section">
        <div className="ind-img">
          <img src={product.image} alt={product.model} />
        </div>

        <div className="ind-details">
          <div className="ind-modal">
            <h3>{product.model}</h3>
          </div>
          <div className="ind-price">
            <h2>{product.price}</h2>
          </div>
          <div className="ind-desc">
            <h4>{product.description}</h4>
          </div>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      </div>
    </>
  );
}
