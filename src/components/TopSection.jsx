import React from "react";
import { useState } from "react";
export default function TopSection() {
  const [grocery, setGrocery] = useState([]);
  const changeHandler = (e) => {
    setGrocery(e.target.value);
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
          <button className="btn btn-primary">Add To FinalList</button>
          <button className="btn btn-primary">Add To WishList</button>
        </div>
      </div>
    </div>
  );
}
