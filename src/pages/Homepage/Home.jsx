import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <div>
      <div className="card text-bg-dark">
        <img src="./homepage/man.jpg" className="card-img" alt="background" />
        <div className="card-img-overlay container justify-content-around d-flex flex-column">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder">YO!!</h5>
            <p className="card-text  fw-bold display-6">New Products are Available</p>
            <p className="card-text fw-bold">Check Out the latest Products</p>
          </div>
        </div>
      </div>
    </div>
  );
}
