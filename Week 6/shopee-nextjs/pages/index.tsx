import Carousel from '@/components/Organisms/Carousel'
import { Provider } from 'react-redux';
import { store } from '../store/store';
import React from 'react'
import Header from '@/components/Organisms/Header';
import ProductList from '@/components/Organisms/ProductList';
import Footer from '@/components/Organisms/Footer';
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