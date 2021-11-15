import React, { useEffect, useState } from "react";
import ProductCard from "../../../SharedComponents/ProductCard/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://lit-reaches-46480.herokuapp.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  });
  return (
    <section className="my-5">
      <div>
        <div className="text-center">
          <h1 className="mt-5">Featured Bike in 2021</h1>
          <p className="text-danger">FEATURED BIKES</p>
        </div>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4 ">

            {products.slice(0, 6).map((data) => (
              <ProductCard key={data._id} info={data}></ProductCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
