import React from "react";
import Navbar from "./Navbar";
import Product from "./Login-Register/Product-page";

const Home = ({user}) => {
  return (
    <>
      <Navbar user={user}/>
      <Product />
    </>
  );
};

export default Home;
