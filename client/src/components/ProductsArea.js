import React, { useContext } from "react";
import Product from "./Product";
import Loading from "./Loading";
import "./ProductsArea.css";
import MyContext from "../MyContext";

const ProductsArea = () => {
  const { productsList, filteredProductsList } = useContext(MyContext);

  const currentProductList =
    filteredProductsList.length > 0 ? filteredProductsList : productsList;

  const productElementsList = currentProductList.map((element) => (
    <Product
      key={element.id}
      productImageSrc={element.image}
      productTitle={element.title}
      productPrice={element.price}
      element={element}
    />
  ));
  if (!productsList && !filteredProductsList) {
    return <Loading />;
  }
  return <section className="products">{productElementsList}</section>;
};

export default ProductsArea;
