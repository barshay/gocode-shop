import React, { useContext } from "react";
import MyContext from "../MyContext";
import "./FilterSelect.css";

const FilterSelect = () => {
  const { productsList, filterProductsByCategory } = useContext(MyContext);

  const categories = productsList
    ?.map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);

  return (
    <div className="collection-sort">
      <label>Filter by:</label>
      <select onChange={(e) => filterProductsByCategory(e.target.value)}>
        <option key="default" value="/">
          All Products
        </option>
        {categories &&
          categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
      </select>
    </div>
  );
};

export default FilterSelect;
