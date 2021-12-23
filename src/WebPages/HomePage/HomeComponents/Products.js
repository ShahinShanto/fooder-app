import React, { useEffect, useState } from "react";
import ProductCard from "../../../SharedComponents/ProductCard/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  });
  return (
    <section className="my-5">
      <div>
        <div className="text-center">
          <h1 className="mt-5 text-warning">Delicious Deals</h1>
          <h4 className="mb-4">Delicious Meals</h4>
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
