
import { Link } from 'react-router-dom';

const Top = (props) => {
    const { _id, img, name, price, review, rating, description } = props.product;
    return (
        <div>
            <div className="">

                <div className="mb-3 shadow">
                    <div className="row g-0 align-items-center justify-content-center">
                        <div className="col-lg-5 ps-3 py-3">
                            <img src={img} className="img-fluid" alt="..." style={{ height: '12rem' }} />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body fcolor">
                                <h4 className="card-title">{name}</h4>
                                <p className="card-text text-secondary">{description}</p>
                                <p className="card-text fw-bold">Rating: <i className="fas fa-star"></i> {rating} ({review})</p>
                                <p className="card-text fw-bold text-danger">Price: ${price}</p>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Top;