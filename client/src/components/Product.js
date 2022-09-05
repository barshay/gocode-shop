import React, { useState, useContext } from "react";
import MyContext from "../MyContext";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./Product.css";
import { IconButton, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Product = ({ productImageSrc, productTitle, productPrice, element }) => {
  const navigate = useNavigate();
  const { AddProductToCart } = useContext(MyContext);
  const [productQty, setProductQty] = useState(1);

  const incQty = () => {
    if (productQty < 15) setProductQty(productQty + 1);
  };

  const decQty = () => {
    if (productQty > 1) setProductQty(productQty - 1);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={productImageSrc} alt="" />
      </div>
      <div className="product-info">
        <h5>{productTitle}</h5>
        <br />
        <h6>{productPrice}</h6>
      </div>
      <div className="add-to-cart">
        <div className="qtySelect">
          <IconButton
            variant="contained"
            sx={{ borderRadius: "10%" }}
            onClick={incQty}
          >
            <AddIcon />
          </IconButton>
          <span className="qty-text">{productQty}</span>
          <IconButton
            variant="contained"
            sx={{ borderRadius: "10%" }}
            onClick={decQty}
          >
            <RemoveIcon />
          </IconButton>
        </div>
        <Button
          variant="contained"
          onClick={() => AddProductToCart(element, productQty)}
        >
          Add to Cart
        </Button>
      </div>
      <Button
        variant="contained"
        onClick={() => navigate(`/products/${element.id}`)}
      >
        Product details
      </Button>
    </div>
  );
};

export default Product;
