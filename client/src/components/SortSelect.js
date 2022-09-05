import React from "react";
import "./SortSelect.css";

const SortSelect = () => {
  const sortOptions = [
    "Featured",
    "Best Selling",
    "Alphabetically, A-Z",
    "Alphabetically, Z-A",
    "Price, low to high",
    "Price, high to low",
    "Date, new to old",
    "Date, old to new",
  ];
  const selectSortOptions = sortOptions.map((sortOption, index) => (
    <option key={index} value="/">
      {sortOption}
    </option>
  ));
  return (
    <div className="collection-sort">
      <label>Sort by:</label>
      <select>{selectSortOptions}</select>
    </div>
  );
};

export default SortSelect;
