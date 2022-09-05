import { Button, IconButton } from "@mui/material";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useContext } from "react";
import MyContext from "../MyContext";
import "./CartProduct.css";

const CartProduct = ({ element }) => {
  // console.log(element.amount);
  const { RemoveProductFromCart, UpdateCartProductQty } = useContext(MyContext);
  const productImageSrc = element.image;
  const productTitle = element.title;
  const productPrice = element.price;
  const productAmount = element.amount;

  const incQty = () => {
    if (productAmount < 15) {
      // debugger;
      UpdateCartProductQty(element, productAmount + 1);
    }
  };

  const decQty = () => {
    if (productAmount > 1) UpdateCartProductQty(element, productAmount - 1);
  };
  return (
    <div className="cart-product-card">
      <div className="cart-product-image">
        <img src={productImageSrc} alt="" />
      </div>
      <div className="cart-product-info">
        <h5>{productTitle}</h5>
        <div className="cart-product-control">
          <div className="cart-qty-select">
            <IconButton
              variant="contained"
              sx={{ borderRadius: "10%" }}
              onClick={incQty}
            >
              <AddIcon />
            </IconButton>
            <span className="qty-text">{productAmount}</span>
            <IconButton
              variant="contained"
              sx={{ borderRadius: "10%" }}
              onClick={decQty}
            >
              <RemoveIcon />
            </IconButton>
          </div>
          <Button
            sx={{ marginLeft: "40px" }}
            variant="contained"
            onClick={() => {
              RemoveProductFromCart(element);
            }}
          >
            Remove from Cart
          </Button>
          <h6>${productPrice}</h6>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
