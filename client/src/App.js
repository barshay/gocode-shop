import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyContext from "./MyContext";
import AppNavBar from "./views/AppNavBar";
import Home from "./views/Home";
import About from "./views/About";
import Cart from "./views/Cart";
import Admin from "./views/Admin";
import Login from "./views/Login";
import "./App.css";
import ProductDetails from "./views/ProductDetails";
import CartDrawer from "./components/CartDrawer";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [filteredProductsList, setFilteredProductsList] = useState([]);
  const [cart, setCart] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const getProductsFromApi = async () => {
    try {
      // const response = await fetch("https://fakestoreapi.com/products");
      const response = await fetch("http://localhost:7000/api/products");
      const dataFromApi = await response.json();
      setProductsList(dataFromApi);
    } catch (e) {
      console.log(e);
    }
  };

  const categories = productsList
    ?.map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);

  useEffect(() => {
    getProductsFromApi();
  }, []);

  const AddProductToCart = (product, qty) => {
    const productInCart = cart.findIndex((item) => item.id === product.id);
    if (productInCart === -1) {
      const newProductToCart = { ...product, amount: qty };
      setCart((prev) => [...prev, newProductToCart]);
    } else {
      const newCart = [...cart];
      newCart[productInCart].amount += qty;
      setCart(newCart);
    }
  };

  const RemoveProductFromCart = (product) => {
    const productInCart = cart.findIndex((item) => item.id === product.id);
    const newCart = [...cart];
    newCart.splice(productInCart, 1);
    setCart(newCart);
  };
  const UpdateCartProductQty = (product, qty) => {
    // debugger;
    const productInCart = cart.findIndex((item) => item.id === product.id);
    const newCart = [...cart];
    newCart[productInCart].amount = qty;
    setCart(newCart);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const filterProductsByCategory = (category) => {
    if (category === "/") {
      setFilteredProductsList(productsList);
      return;
    }
    const filteredProducts = productsList.filter(
      (product) => product.category === category
    );
    setFilteredProductsList(filteredProducts);
  };
  // let isAdmin = true;
  return (
    <MyContext.Provider
      value={{
        productsList,
        filterProductsByCategory,
        filteredProductsList,
        cart,
        AddProductToCart,
        RemoveProductFromCart,
        UpdateCartProductQty,
      }}
    >
      <BrowserRouter>
        <AppNavBar
          itemsInCart={cart.length}
          isAdmin={true}
          setIsDrawerOpen={setIsDrawerOpen}
        />
        <CartDrawer
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="admin"
            element={
              <Admin productsList={productsList} categories={categories} />
            }
          />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/products/:productID" element={<ProductDetails />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
