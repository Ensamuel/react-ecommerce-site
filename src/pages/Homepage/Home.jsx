import React from "react";

import "./Home.css";
import { Link } from "react-router-dom";
import Products from "../Productspage/Products";
export default function Home() {
  return (
    <div>
      <div
        className="row container mx-auto"
        style={{ alignItems: "center", backgroundColor: "#FFC1BF" }}
      >
        <div className="col-6 ">
          <h5 id="discount">up to 20% discount</h5>
          <h3 id="fashion">Fashion at it's peak</h3>
          <Link to = '/products'><button
            style={{
              backgroundColor: "white",
              border: "none",
              height: "40px",
              width: "100px",
              fontWeight: "bold",
            }}
          > Products 
            
          </button></Link>
        </div>
        <div className="col-6" style={{}}>
          <img
            src="woman.png"
            alt="woman"
            id="homepage"
          />
        </div>
      </div>
      <Products/>
    </div>
  );
}
