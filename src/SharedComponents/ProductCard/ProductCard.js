import React from "react";
import { Button } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import './ProductCard.css';

const ProductCard = (props) => {
  const { _id, img, name, price, review, rating, description } = props.info;
  return (

    <div className="col">
      <div className="brdr shadow h-100">
        <div className="text-center">
          <img src={img} className="animate card-img-top img-fluid p-3 text-center" style={{ height: '15.5rem', width: '25rem' }} alt="..." />
        </div>
        <div className="card-body text-center">
          <h3 className="text-dark">{name}</h3>
          <p className="card-text text-center">{description}</p>

          <div className="d-flex justify-content-between">
            <p className="card-text fw-bold"> {rating}<Rating
              initialRating={rating}
              emptySymbol="far fa-star rating-color text-warning"
              fullSymbol="fas fa-star rating-color text-warning"
              readonly
            /> ({review})</p>
            <p className="card-text fw-bold text-danger"> ${price}</p>
          </div>
          <div className="text-center">
            <Link to={`/purchase_Car/${_id}`}>
              <Button className="text-white fw-bold btn-dark w-100 py-2">
                Order Now
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
