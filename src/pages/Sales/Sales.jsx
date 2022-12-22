import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../components/useFetch";
import Products from "../Productspage/Products";
import { Link } from "react-router-dom";
const Sales = () => {
  const { id } = useParams();
  const { data, filter, setFilter, loading } = useFetch(
    "https://fakestoreapi.com/products/" + id
  );
  console.log(data);
  {
    return (
      <div>
        <h3 className="text-center">Chosen product</h3>
        <div style={{textAlign:'center', alignItems:'middle'}}>
          <img
            src={filter.image}
            alt="product-image"
            style={{ height: "200px", width: "200px" }}
          />
          <div >
            <h5> {filter.title} </h5>
            <h5> ${filter.price} </h5>
            <h5>rating: {filter.rating && filter.rating.rate}</h5>
           <Link to ='/card'><button>pay with card</button></Link> 
          </div>
        </div>
        <Products/>
      </div>
    );
  }
};

export default Sales;
