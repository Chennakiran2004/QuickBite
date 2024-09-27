import React, { useEffect } from "react";
import axios from "axios";

const CategoryData = () => {
  useEffect(() => {
    // Fetch the API data when the component mounts using axios
    axios
      .get("http://127.0.0.1:8001/qb_order/get/categories/")
      .then((response) => {
        console.log(response.data); // Log the data to the console
      })
      .catch((error) => {
        console.error("There was a problem with the axios request:", error);
      });
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div>
      <h1>Category Data</h1>
      <p>Check the console for API data.</p>
    </div>
  );
};

export default CategoryData;
