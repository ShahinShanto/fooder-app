import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { useParams } from "react-router";
import NavigationBar from "../NavigationBar/NavigationBar";
import OrderForm from "../OrderForm/OrderForm";

const PurchaseBike = () => {
  const { productId } = useParams();
  const [products, setProducts] = useState([]);
  const [singleBike, setSingleBike] = useState({});
  useEffect(() => {
    fetch("https://lit-reaches-46480.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const found = products.find((service) => service._id === productId);
    setSingleBike(found);
  }, [products, productId]);

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="card bg-light text-dark mb-1 border-0">
        <div className="card-img-overlay text-center text-white d-flex align-items-center justify-content-center">
          <h1 className="card-title fw-bold text-dark mt-5 pt-5 pb-3">
            Purchase
            <br />
            <span className="text-danger">{singleBike?.bikeName}</span>

          </h1>
        </div>
      </div>

      <div className="container mt-4 pt-5">
        <div className="row mt-5">
          <div className="col-12 col-md-7">
            <div className=" mb-3">
              <img src={singleBike?.img} className="card-img-top" style={{ height: '21rem', width: '26em' }} alt="..." />
              <div className="card-body">
                <h1 className="card-title">{singleBike?.bikeName}</h1>
                <div>
                  <h3>
                    <span className="fw-bold text-danger">
                      ${singleBike?.price}
                    </span>
                  </h3>
                </div>
                <div className="">
                  <div className="mb-3">
                    <Rating
                      className="text-warning"
                      initialRating={singleBike?.rating}
                      emptySymbol="fas fa-star"
                      fullSymbol="fas text-warning fa-star"
                      readonly
                    />
                    {singleBike?.rating} ({singleBike?.totalReviews})
                  </div>
                  <p className="">Fuel Capacity: {singleBike?.fuel}</p>
                </div>
                <div>

                  <p className="">Weight: {singleBike?.weight}</p>
                </div>
                <div className="fw-bold card-text mt-3">Overview</div>
                <p className="">{singleBike?.description}</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-5">
            {singleBike?.bikeName ? (
              <div className="card bg-dark text-white">
                <h3 className="fw-bold text-center my-3">
                  Order
                </h3>
                <OrderForm
                  carId={productId}
                  bikeImage={singleBike?.img}
                  bikeName={singleBike?.bikeName}
                  price={singleBike?.price}
                ></OrderForm>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseBike;
