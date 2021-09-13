import React from "react";
import { useState } from "react";
export default function TopSection() {
  const [grocery, setGrocery] = useState([]);
  const [wistlist, setWishlist] = useState([]);
  const [finallist, setFinallist] = useState([]);
  const changeHandler = (e) => {
    setGrocery(e.target.value);
  };
  const addToFinalList = (e) => {
    setFinallist([...finallist, grocery]);
    setGrocery("");
  };
  const addTowishList = (e) => {
    setWishlist([...wistlist, grocery]);
    setGrocery("");
  };
  return (
    <div>
      <h1 className="text-center">Grocery Management Web App</h1>
      <hr />

      <div className="container">
        <div className="d-flex justify-content-around">
          <input
            type="text"
            name="grocery"
            placeholder="enter grocery"
            className="text-center"
            value={grocery}
            onChange={changeHandler}
          />
          <button className="btn btn-primary" onClick={addToFinalList}>
            Add To FinalList
          </button>
          <button className="btn btn-primary" onClick={addTowishList}>
            Add To WishList
          </button>
        </div>
      </div>
    </div>
  );
}
