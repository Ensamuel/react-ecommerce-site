import React from "react";
import { Link } from "react-router-dom";
import UseFetch from "../../components/useFetch";
//"https://fakestoreapi.com/products"
import "./Products.css";
export default function Products() {
  const { data, filter, setFilter, loading } = UseFetch(
    "https://fakestoreapi.com/products"
  );

  const Loading = () => {
    return <div className=" d-flex justify-content-center">loading...</div>;
  };

  const filtered = (prod) => {
    const Updated = data.filter((x) => prod === x.category);
    setFilter(Updated);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className=" mt-3 mb-4 d-flex justify-content-center">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filtered("men's clothing");
            }}
          >
            Men clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filtered("women's clothing");
            }}
          >
            Women clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filtered("jewelery");
            }}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filtered("electronics");
            }}
          >
            Electronic
          </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3">
                <div
                  clas="card h-100 text-center p-4 my-3 "
                  key={product.id}
                  id="output-products"
                >
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    style={{ height: "200px" }}
                  />

                  <div className="card-body p-4">
                    <h5 className="card-title mb-0">{product.title}</h5>
                    <p className="card-text">${product.price}</p>
                    <Link to={`/products/${product.id}`}>
                      <button className="bg-dark text-white">Buy Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <h1 className=" row justify-content-center">Latest Products</h1>
        <div className="row">{loading ? <Loading /> : <ShowProducts />}</div>
      </div>
    </div>
  );
}
