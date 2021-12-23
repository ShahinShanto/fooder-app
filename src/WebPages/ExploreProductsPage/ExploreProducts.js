import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "../../SharedComponents/ProductCard/ProductCard";
import NavigationBar from "../../SharedComponents/NavigationBar/NavigationBar";
import Footer from "../../SharedComponents/Footer/Footer";
const ExploreProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  });
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="margin-top">
        <Container>
          <h3 className="my-3 text-center">Total Product : {products.length}</h3>
          <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4 ">

              {products.map((data) => (
                <ProductCard key={data._id} info={data}></ProductCard>
              ))}
            </div>
          </div>
        </Container>
        {/* <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((data) => (
          <ProductCard key={data._id} Info={data}></ProductCard>
        ))}
      </div> */}
      </div>
      <Footer></Footer>
    </>
  );
};

export default ExploreProducts;
