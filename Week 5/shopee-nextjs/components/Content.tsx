import React from 'react'
import Search from './Search'
import { store, useAppDispatch, useAppSelector, wrapper } from '@/store/store'
import { ProductProp, User } from '@/types'
import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { fetchUsers } from '@/store/userSlice';
import { configureStore } from '@reduxjs/toolkit';

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async (context) => {
  //  await store?.dispatch(fetchUsers());
  //  const data=await store.getState();
  // return {
  //   props: {
  //     users: data
  //   },
  // }

  // console.log(context)
  // store.dispatch(fetchUsers()); 
  // const users = store.getState(); 
  // return { props: { users } };
}
)
const Content = () => {
  //fetch product data
  const dispatch = useAppDispatch()
  const users=useAppSelector(state=>state.user.users)
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])
  return (
    <section className="admin__wrapper">
      <Search />
      <section className='admin__content'>
        <h1 className="admin__title">Dashboard</h1>
        <div className="admin__figures">
          <div className="admin__card">
            <div className="admin__title">
              <div>
                <h2>1500</h2>
                <p>Reponse</p>
              </div>
            </div>
            <span className="progress" data-value="40%" />
            <span className="label">40%</span>
          </div>
          <div className="admin__card">
            <div className="admin__title">
              <div>
                <h2>234</h2>
                <p>Sales</p>
              </div>
            </div>
            <span className="progress" data-value="60%" />
            <span className="label">60%</span>
          </div>
          <div className="admin__card">
            <div className="admin__title">
              <div>
                <h2>465</h2>
                <p>Pageviews</p>
              </div>
              <i className="bx bx-trending-up icon" />
            </div>
            <span className="progress" data-value="30%" />
            <span className="label">30%</span>
          </div>
          <div className="admin__card">
            <div className="admin__title">
              <div>
                <h2>235</h2>
                <p>Visitors</p>
              </div>
            </div>
            <span className="progress" data-value="80%" />
            <span className="label">80%</span>
          </div>
        </div>
        {/* --------------------------User List----------------------- */}
        <div className="admin__list">
          <div className="list__content">
            <div className="admin__title">
              <h3>Users List</h3>
            </div>
            <div className="admin__card">
              <table className="admin__tbl">
                <tr className="tbl__head">
                  <th>#</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Street</th>
                  <th>City</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
                {users?.map((user: User) => {
                  return (
                    <tr className='tbl__content' key={String(user.id)}>
                      <td>{String(user.id)}</td>
                      <td>{String(user.username)}</td>
                      <td>{String(user.email)}</td>
                      <td>{String(user.address.street)}</td>
                      <td>{String(user.address.city)}</td>
                      <td>{String(user.phone)}</td>
                      <td>
                        <button>Remove |</button>
                        <button>Edit</button>
                      </td>
                    </tr>
                  )
                })}

              </table>
            </div>
          </div>
        </div>
        {/* ------------------------Product List-------------------------- */}
        <div className="admin__list">
          <div className="list__content">
            <div className="admin__title">
              <h3>Products List</h3>
            </div>
            <div className="admin__card">
              <table className="admin__tbl">
                <tr className="tbl__head">
                  <th>#</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
                <tr className='tbl__content'>
                  <td>1</td>
                  <td>Test product</td>
                  <td>150</td>
                  <td>Electronic</td>
                  <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem!</td>
                  <td>https://i.pravatar.cc</td>
                  <td>
                    <button>Remove |</button>
                    <button>Edit</button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Content