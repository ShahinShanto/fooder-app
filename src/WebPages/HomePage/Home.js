import React from "react";
import Footer from "../../SharedComponents/Footer/Footer";
import NavigationBar from "../../SharedComponents/NavigationBar/NavigationBar";
import "./Home.css";
import Banner from "./HomeComponents/Banner";
import BikeBlogs from "./HomeComponents/BikeBlogs";
import Products from "./HomeComponents/Products";
import UsersReview from "./HomeComponents/UsersReview";

const Home = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Banner></Banner>
      <Products></Products>
      <UsersReview></UsersReview>
      <BikeBlogs></BikeBlogs>
      <Footer></Footer>
    </>
  );
};

export default Home;
