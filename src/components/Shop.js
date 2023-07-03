import "./Shop.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductData } from "../store/product-slice";

function Shop({ addToCart }) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.productData);

  useEffect(() => {
    // Fetch the product data when the component mounts
    dispatch(getProductData());
  }, [dispatch]);
  // State to track clicked buttons
  const [clickedButtons, setClickedButtons] = useState([]);

  // Function to handle button click
  const handleAddToCart = (productItem) => {
    addToCart(productItem);
    setClickedButtons((prevButtons) => [...prevButtons, productItem.id]);
  };
  const orderData = useSelector((state) => state.order.orderData);
  console.log("order:", orderData);
  return (
    <div className="Shop-container">
      <div id="Shop-Farm-Dairy" className="Shop-category-section">
        <h2 className="Shop-category">Farm Dairy</h2>
      </div>
      <div className="Shop-flex">
        {product.map((productItem) => {
          if (productItem.classification === "Dairy") {
            return (
              <div className="Shop-product-item" key={productItem.id}>
                <div className="Shop-product-info">
                  <img src={productItem.url} alt="img" />
                  <p>
                    {productItem.name} | {productItem.classification}
                    {productItem.Quantity === 0 ? (
                      <p className="out-of-stock">Out of Stock</p>
                    ) : productItem.Quantity < 10 ? (
                      <p className="limited-stock">Limited Stock</p>
                    ) : (
                      <p className="on-stock"> Stock Available</p>
                    )}
                  </p>
                  <p>{productItem.category}</p>
                  <p>Rs. {productItem.price} /-</p>
                  <button
                    onClick={() => handleAddToCart(productItem)}
                    disabled={productItem.Quantity === 0}
                    className={
                      clickedButtons.includes(productItem.id) ? "clicked" : ""
                    }
                  >
                    {clickedButtons.includes(productItem.id)
                      ? "Added"
                      : "Add To Cart"}
                  </button>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div id="Shop-Farm-Meat" className="Shop-category-section">
        <h2 className="Shop-category">Farm Meat</h2>
      </div>
      <div className="Shop-flex">
        {product.map((productItem) => {
          if (productItem.classification === "meat") {
            return (
              <div className="Shop-product-item" key={productItem.id}>
                <div className="Shop-product-info">
                  <img src={productItem.url} alt="img" />
                  <p>
                    {productItem.name} | {productItem.classification}
                    {productItem.Quantity === 0 ? (
                      <p className="out-of-stock">Out of Stock</p>
                    ) : productItem.Quantity < 10 ? (
                      <p className="limited-stock">Limited Stock</p>
                    ) : (
                      <p className="on-stock"> Stock Available</p>
                    )}
                  </p>
                  <p>{productItem.category}</p>
                  <p>Rs. {productItem.price} /-</p>
                  <button
                    onClick={() => handleAddToCart(productItem)}
                    disabled={productItem.Quantity === 0}
                    className={
                      clickedButtons.includes(productItem.id) ? "clicked" : ""
                    }
                  >
                    {clickedButtons.includes(productItem.id)
                      ? "Added"
                      : "Add To Cart"}
                  </button>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div id="Shop-Farm-Food" className="Shop-category-section">
        <h2 className="Shop-category">Farm Food</h2>
      </div>
      <div className="Shop-flex">
        {product.map((productItem) => {
          if (productItem.classification === "food") {
            return (
              <div className="Shop-product-item" key={productItem.id}>
                <div className="Shop-product-info">
                  <img src={productItem.url} alt="img" />
                  <p>
                    {productItem.name} | {productItem.classification}
                    {productItem.Quantity === 0 ? (
                      <p className="out-of-stock">Out of Stock</p>
                    ) : productItem.Quantity < 10 ? (
                      <p className="limited-stock">Limited Stock</p>
                    ) : (
                      <p className="on-stock"> Stock Available</p>
                    )}
                  </p>
                  <p>{productItem.category}</p>
                  <p>Rs. {productItem.price} /-</p>
                  <button
                    onClick={() => handleAddToCart(productItem)}
                    disabled={productItem.Quantity === 0}
                    className={
                      clickedButtons.includes(productItem.id) ? "clicked" : ""
                    }
                  >
                    {clickedButtons.includes(productItem.id)
                      ? "Added"
                      : "Add To Cart"}
                  </button>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default Shop;
