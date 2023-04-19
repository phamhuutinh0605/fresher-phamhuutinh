import Option from '@/components/Option'
import Search from '@/components/Search'
import SideBar from '@/components/SideBar'
import React, { useState } from 'react'

const AddNew = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <>
      <SideBar />
      <section className="admin__wrapper">
        <Search />
        <section className='admin__content'>
          <div className='admin__option'>
            <h1 className="admin__title">Add New User</h1>
            <Option handleToggle={handleToggle} toggle={toggle} />
          </div>
          <div className="admin__list">
            <div className="list__content">
              <div className="admin__card">
                <div className="card">
                  {!toggle ? (
                    <form className="form">
                      <div className="group">
                        <input placeholder="‎" type="text" required />
                        <label htmlFor="name">User Name</label>
                      </div>
                      <div className="group">
                        <input placeholder="‎" type='email' id="email" name="email" required />
                        <label htmlFor="email">Email</label>
                      </div>
                      <div className="group">
                        <input placeholder="‎" type="password" id="password" name="password" required />
                        <label htmlFor="password">Password</label>
                      </div>
                      <div className="group">
                        <input placeholder="‎" type="address" id="address" name="address" required />
                        <label htmlFor="address">Address</label>
                      </div>
                      <button type="submit">Submit</button>
                    </form>
                  ) : (
                    <form className="form">
                      <div className="group">
                        <input placeholder="‎" type="text" required />
                        <label htmlFor="title">Title</label>
                      </div>
                      <div className="group">
                        <input placeholder="‎" type='number' id="number" name="number" required />
                        <label htmlFor="price">Price</label>
                      </div>
                      <div className="group">
                        <input placeholder="‎" type="text" required />
                        <label htmlFor="category">Category</label>
                      </div>
                      <div className="group">
                        <input placeholder="‎" type="text" required />
                        <label htmlFor="description">Description</label>
                      </div>
                      <div className="group">
                        <input placeholder="‎" type="text" required />
                        <label htmlFor="image">Image</label>
                      </div>
                      <button type="submit">Submit</button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}
export default AddNew