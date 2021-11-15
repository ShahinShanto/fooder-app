import React from "react";
import { Button } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import './ProductCard.css';

const ProductCard = (props) => {
  const { _id, img, bikeName, price, totalReviews, rating, fuel } = props.info;
  return (

    <div className="col">
      <div className="brdr shadow h-100">
        <div className="text-center">
          <img src={img} className="animate card-img-top img-fluid p-3 text-center" style={{ height: '15.5rem', width: '19rem' }} alt="..." />
        </div>
        <div className="card-body">
          <h3 className="text-dark">{bikeName}</h3>
          <div>
            <h4 className="text-danger">${price}</h4>
          </div>
          <div className="d-flex justify-content-between align-items-center">

            <div className="d-flex mb-2">

              <h5 className="fw-bold me-2 mb-0">{rating}</h5>
              <Rating
                initialRating={rating}
                emptySymbol="far fa-star rating-color"
                fullSymbol="fas fa-star rating-color"
                readonly
              />
              <p className="ms-2 me-4 ">({totalReviews})</p>

              <h5 className="fw-bold ms-5">
                <i class="fas fa-gas-pump "></i>
                {fuel}</h5>
            </div>
          </div>
          <div className="text-center">
            <Link to={`/purchase_Car/${_id}`}>
              <Button className="text-white fw-bold btn-danger w-100 py-1">
                Purchase Now
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
