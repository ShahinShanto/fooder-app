import { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';

import Top from '../Top/Top';
import './TopRated.css';


const TopRated = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (

        <div>


            <Container className="py-3">
                <h1 className="text-warning text-center">Recommended</h1>
                <h5 className="text-center mb-5">Top Rated</h5>
                <Row xs={1} md={2} className="g-4 ">
                    {
                        products.length === 0 ?
                            <div className="d-flex justify-content-center">
                                <Spinner animation="border" />
                            </div>
                            :
                            products.slice(8).map((product) => (
                                <Top key={products._id} product={product}></Top>
                            ))}
                </Row>
            </Container>

        </div>
    );
};

export default TopRated;