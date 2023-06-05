import React from 'react'
import Search from './Search'
import { Product, User } from '@/types'
import { useAppDispatch } from '@/store/store'
import { removeUser } from '../../store/userSlice';
import { useRouter } from 'next/router';
import { removeProduct } from '@/store/productAdminSlice';

const Content = ({ users, products }:{users:User[],products:Product[]}) => {

  const dispatch = useAppDispatch()
  const handleRemoveUser = (id: string) => {
    console.log(id);
    dispatch(removeUser(id))
  }
  const router = useRouter()
  const handleEditUser = (user: User) => {
    router.push({
      pathname: "/Login/Admin/AddNew",
      query: { user: JSON.stringify(user) }
    })
  }
  // ----------------PRODUCT--------------------
  const handleRemoveProduct = (id: string) => {
    console.log(id);
    dispatch(removeProduct(id))
  }
  const handleEditProduct = (product: Product) => {
    router.push({
      pathname: "/Login/Admin/AddNew",
      query: { product: JSON.stringify(product) }
    })
  }
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
                  <th>Avatar</th>
                  <th>Action</th>
                </tr>
                {users?.map((user: User) => {
                  return (
                    <tr className='tbl__content' key={String(user.id)}>
                      <td>{String(user.id)}</td>
                      <td>{String(user.username)}</td>
                      <td>{String(user.email)}</td>
                      <td>{String(user.avatar)}</td>
                      <td>
                        <button onClick={() => handleRemoveUser(user.id.toString())} className='btn__remove'>Remove</button>
                        <button onClick={() => handleEditUser(user)} className='btn__edit'>Edit</button>
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
                  <th>Description</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
                {products?.map((product: Product) => {
                  return (
                    <tr className='tbl__content' key={String(product.id)}>
                      <td>{product.id}</td>
                      <td>{product.title}</td>
                      <td>{String(product.price)}</td>
                      <td>{product.desc}</td>
                      <td>{product.image}</td>
                      <td>
                        <button className='btn__remove' onClick={() => handleRemoveProduct(product.id.toString())}>Remove</button>
                        <button className='btn__edit' onClick={() => handleEditProduct(product)}>Edit</button>
                      </td>
                    </tr>
                  )
                })}
              </table>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Content;