import React, { useEffect } from "react";
import FilterSelect from "./FilterSelect";
import SortSelect from "./SortSelect";
import "./Header.css";

const Header = ({ productsArr }) => {
  useEffect(() => {
    console.log(productsArr);
  }, [productsArr]);

  return (
    <div className="product-filter">
      {/* <h1>Jackets</h1> */}
      <div className="sort">
        <FilterSelect productsArr={productsArr} />
        <SortSelect />
      </div>
    </div>
  );
};

export default Header;
