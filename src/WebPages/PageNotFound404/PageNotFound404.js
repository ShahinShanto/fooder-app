import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound404.css';

const PageNotFound_404 = () => {
  return (
    <div className="container-fluid">
      <div className="text-center design container-fluid pt-5 mt-5">
        <h1 className="design text-danger container-fluid  pt-5 mt-5">404</h1>
        <h3 className="design container-fluid">The page you are looking for is not available.</h3>
        <Link className="nav-link text" to="/Home"> <button type="button" className="btn btn-danger">Go Back</button></Link>
      </div>
    </div>
  );
};

export default PageNotFound_404;
