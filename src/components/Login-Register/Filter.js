import React, { useState } from "react";
import "./Filter.css";

const Filter = (props) => {
    const [star,setStar]=useState(false)
    const [checkStar, setcstar]= useState()
    const startRating=(e)=>{
                setStar(true)
            setcstar(e.target.innerHTML)
            props.rating(e.target.innerHTML)

           
    }
  return (
    <div className="filter-container">
      <div className="container">
        <h2>Filter by categories</h2>
        <button className="btn" onClick={() => props.category("all")}>
          All
        </button>
        <button className="btn" onClick={() => props.category("combo")}>
          Combos
        </button>
        <button className="btn" onClick={() => props.category("shoe")}>
          Shoes
        </button>
        <button className="btn" onClick={() => props.category("t-shirt")}>
          T-shirts
        </button>
      </div>
      <div className="star-container">
          <h2>Filter by rating</h2>
        <ul>
          <li onClick={startRating}>5{star && checkStar=== '5☆'?  '⭐':'☆'}</li>
          <li onClick={startRating}>4{star && checkStar=== '4☆'?  '⭐':'☆'}</li>
          <li onClick={startRating}>3{star && checkStar=== '3☆'?  '⭐':'☆'}</li>
          <li onClick={startRating}>2{star && checkStar=== '2☆'?  '⭐':'☆'}</li>
          <li onClick={startRating}>1{star && checkStar=== '1☆'?  '⭐':'☆'}</li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
