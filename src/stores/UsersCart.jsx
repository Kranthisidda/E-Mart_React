import { useCart } from "./Context/CartContext";
import Navbar from "./componenets/navbar";
export function UserCart() {
  const { cartItems, addToCart,removeFromCart } = useCart();

  return (
    <>
    <Navbar />
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => {
          return (
            <div className="cart-section" key={index}>
              <div className="cart-img">
                <img src={item.image} alt={item.product} />
              </div>
              <div className="cart-details">
                <h3>{item.product}</h3>
                <h2>{item.price}</h2>
                <h3>{item.model}</h3>
              </div>
              <div ><button className="remove-cart" onClick={()=>removeFromCart(item)}>Remove</button></div>
            </div>
          );
        })
      ) : (
        <p>Your cart is empty</p>
      )}
    </>
  );
}
