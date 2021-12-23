import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../SharedComponents/Footer/Footer';
import NavigationBar from '../SharedComponents/NavigationBar/NavigationBar';
import './Menu.css';

const Menu = () => {
    return (
        <>
            <NavigationBar></NavigationBar>
            <div className="container">
                <h1 className="text-center my-5 b-fcolor">Explore Foods</h1>

                <div class="row row-cols-1 row-cols-md-3 g-4">

                    <Link to="/">
                        <div class="col box-3">
                            <div class="card h-100 burger">
                                <p class="card-text text-white fs-1">Burger</p>
                            </div>
                        </div>
                    </Link>

                    <Link>
                        <div class="col box-3">
                            <div class="card h-100 pizza">
                                <p class="card-text text-white fs-1 ">Pizza</p>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div class="col box-3">
                            <div class="card h-100 momos">
                                <p class="card-text text-white fs-1">Momos</p>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div class="col box-3">
                            <div class="card h-100 chicken">
                                <p class="card-text text-white fs-1">Chicken</p>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div class="col box-3">
                            <div class="card h-100 biriyani">
                                <p class="card-text text-white fs-1">Biriyani</p>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div class="col box-3">
                            <div class="card h-100 fries">
                                <p class="card-text text-white fs-1">Fries</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <Footer></Footer>
        </>

    );
};

export default Menu;