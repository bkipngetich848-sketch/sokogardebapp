import axios from "axios";
import React, { useState } from "react";

const Addproducts = () => {
  // Product hooks
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [product_photo, setProductPhoto] = useState(null);

  // Status hooks
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Submit function
  const handlesubmit = async (e) => {
    e.preventDefault();

    setLoading("Please wait...");
    setSuccess("");
    setError("");

    try {
      // Create FormData object
      const formdata = new FormData();

      formdata.append("product_name", product_name);
      formdata.append("product_description", product_description);
      formdata.append("product_cost", product_cost);
      formdata.append("photo", product_photo);

      // Send data to API
      const response = await axios.post(
        "https://tikwet.alwaysdata.net/api/addproduct",
        formdata
      );

      console.log(response.data);

      setLoading("");
      setSuccess("Product added successfully!");

      // Clear form
      setProductName("");
      setProductDescription("");
      setProductCost("");
      setProductPhoto();
    } 
    
    catch (error) {
      console.error(err);

      setLoading("");
      setError("Failed to add product. Please try again.");
    }
  };

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 p-4 card shadow">
        <h1>Add Product</h1>

        <form onSubmit={handlesubmit}>
          <h4 className="text-info">{loading}</h4>
          <h4 className="text-success">{success}</h4>
          <h4 className="text-danger">{error}</h4>
          
          {/* product name */}
          <input
            type="text"
            placeholder="Enter the name of the product"
            value={product_name}
            onChange={(e) => setProductName(e.target.value)}
            className="form-control"
            required
          />
          <br />

           {/* product description */}
          <input
            type="text"
            placeholder="Enter product description"
            value={product_description}
            onChange={(e) => setProductDescription(e.target.value)}
            className="form-control"
            required
          />
          <br />

          <input
            type="number"
            placeholder="Enter the price of the product"
            value={product_cost}
            onChange={(e) => setProductCost(e.target.value)}
            className="form-control"
            required
          />
          <br />

          <label>Product Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setProductPhoto(e.target.files[0])}
            className="form-control" />
          <br />

          <input
            type="submit"
            value="Add Product"
            className="btn btn-info w-100"
          />
        </form>
      </div>
    </div>
  );
};

export default Addproducts;