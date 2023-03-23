import React from "react";

import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import { CartState } from "../context/Context";


const Home = () => {
  const {
    state: { products },
    productState: {searchQuery },
  } = CartState();
  const handleFilter=()=>{
    let filterList=products;
    if(searchQuery){
      filterList=filterList.filter((product)=>{
        product.title.toLowerCase().includes(searchQuery)
      })
    }
    return filterList;
  }
  return (
    <>
      <Header />
      <Carousel />
      <ProductList handleFilter={handleFilter}/>
      <Footer />
    </>
  );
};

export default Home;
