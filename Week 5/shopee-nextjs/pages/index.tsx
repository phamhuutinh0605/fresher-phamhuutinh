import Carousel from '@/components/Carousel'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProductList from '@/components/ProductList'
import { Provider } from 'react-redux';
import { store } from '../store/store';
import React from 'react'
const Home = () => {
  return (
    <Provider store={store}>
      <Header />
      <Carousel/>
      <ProductList/>
      <Footer/>
    </Provider>
  )
}

export default Home