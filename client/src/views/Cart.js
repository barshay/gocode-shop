import React, { useContext } from "react";
import CartProduct from "../components/CartProduct";
import MyContext from "../MyContext";
import "./Cart.css";

const Cart = () => {
  const { cart } = useContext(MyContext);

  if (!cart.length) {
    return <div className="cart-empty">The Cart is Empty!!!</div>;
  }
  // console.log(cart);
  const cartElementsList = cart.map((element) => (
    <CartProduct element={element} />
  ));

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      <div className="price-div">
        <h6>Price</h6>
      </div>
      <section className="cartProducts">{cartElementsList}</section>
    </div>
  );
};

export default Cart;
