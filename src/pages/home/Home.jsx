import React from "react";
import HomeBanner from "./homeBanner/HomeBanner";
import "./style.scss";
import Movie from "./movie/Movie";

const Home = () => {
  return <div>
    <HomeBanner />
    <Movie />
  </div>;
};

export default Home;
