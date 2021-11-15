import React, { useEffect, useState } from "react";
import { Container, Row, Card, Col, Button } from "react-bootstrap";
import Rating from "react-rating";

const ManageProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch("https://lit-reaches-46480.herokuapp.com/products")
      .then((response) => response.json())
      .then((data) => setAllProducts(data));
  });

  const handleDeleteProduct = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this product?"
    );
    if (proceed) {
      const productsUrl = `https://lit-reaches-46480.herokuapp.com/products/${id}`;
      fetch(productsUrl, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted Successfully!");
            const remainingProducts = allProducts.filter(
              (userOrder) => userOrder._id !== id
            );
            setAllProducts(remainingProducts);
          }
        });
    }
  };

  return (
    <div className="margin-top">
      <Container>
        <h2 className="my-3">Total Products : {allProducts.length}</h2>
        <Row xs={1} sm={1} md={4} className="g-2">
          {allProducts.map((data) => (
            <div className="col">
              <div className="brdr shadow h-100">
                <div className="text-center">
                  <img src={data.img} className="card-img-top img-fluid p-3 text-center animate" style={{ height: '15.5rem', width: '19rem' }} alt="..." />
                </div>
                <div className="card-body">
                  <h4 className="text-dark">{data.bikeName}</h4>
                  <div>
                    <h5 className="text-danger">${data.price}</h5>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">

                    <div className="d-flex mb-2">

                      <h6 className="fw-bold me-2 mb-0">{data.rating}</h6>
                      <Rating
                        initialRating={data.rating}
                        emptySymbol="far fa-star rating-color"
                        fullSymbol="fas fa-star rating-color"
                        readonly
                      />
                      <p className="ms-2 me-4 ">({data.totalReviews})</p>
                    </div>
                  </div>
                  <div>
                    <p className=""> Fuel Capacity: <i class="fas fa-gas-pump "></i> {data.fuel}

                    </p>
                  </div>
                  <div className="text-center"></div>
                  <Button
                    onClick={() => handleDeleteProduct(data._id)}
                    className="btn btn-danger"
                  >
                    <i className="fas fa-trash-alt me-2"></i>Delete This Product
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ManageProducts;
