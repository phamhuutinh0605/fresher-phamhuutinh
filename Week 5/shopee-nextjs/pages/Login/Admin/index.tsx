import React from 'react'
import SideBar from '@/components/SideBar';
import Content from '@/components/Content';
import { GetServerSideProps } from 'next';
import { wrapper } from '@/store/store';
import { fetchUsers } from '@/store/userSlice';
import { fetchProducts } from '@/store/productAdminSlice';
import { Product, User } from '@/types';

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async () => {
  await store.dispatch(fetchUsers());
  await store.dispatch(fetchProducts());
  const state = store.getState();
  const users = state.user.users;
  const products = state.productAdmin.productList;
  console.log(state.user.users)
  console.log(products)
  return {
    props:
    {
      users: users,
      products: products
    }
  };
})

const Admin = ({ users, products }: { users: User[], products: Product[] }) => {
  return (
    <>
      <SideBar />
      <Content users={users} products={products} />
    </>
  )
}

export default Admin