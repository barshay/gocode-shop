import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <main className="spinner-examples">
      <div className="example">
        <span className="smooth spinner" />
      </div>
      <div className="loading-text">
        <span>Loading...</span>
      </div>
    </main>
  );
};

export default Loading;
