import React from "react";
import { useState } from "react";
import "./Grocery.css";
export default function TopSection() {
  const [grocery, setGrocery] = useState([]);
  const [wistlist, setWishlist] = useState([]);
  const [finallist, setFinallist] = useState([]);
  const [update, setUpdate] = useState([]);
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
  const updateHandler = () => {
    setUpdate(wistlist);
  };
  const updateHandler2 = () => {
    setUpdate(finallist);
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
        <div className="d-flex justify-content-around my-3 mx-3">
          <button className="btn btn-primary" onClick={updateHandler2}>
            show FinalList
          </button>
          <button className="btn btn-primary" onClick={updateHandler}>
            show WishList
          </button>
        </div>
      </div>
      <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4">
        <div className="col-12 col-md-12 col-lg-8">
          {update.map((el) => {
            return (
              <div className="pt-4 pb-3">
                <h1 className="text-center">{el}</h1>
                <button className="btn btn-success">purchase</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
