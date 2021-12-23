import React from "react";
import QNA from "../../QNA/QNA";
import Footer from "../../SharedComponents/Footer/Footer";
import NavigationBar from "../../SharedComponents/NavigationBar/NavigationBar";
import TopRated from "../../TopRated/TopRated";
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
      <TopRated></TopRated>
      <Products></Products>
      <UsersReview></UsersReview>
      <BikeBlogs></BikeBlogs>
      <QNA></QNA>
      <Footer></Footer>
    </>
  );
};

export default Home;
