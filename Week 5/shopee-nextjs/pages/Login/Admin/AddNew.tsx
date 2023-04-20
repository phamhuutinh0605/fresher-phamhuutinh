import Option from '@/components/Option'
import Search from '@/components/Search'
import SideBar from '@/components/SideBar'
import { Product, User } from '@/types'
import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../store/store';
import { addUser, editUser } from '../../../store/userSlice';
import { useRouter } from 'next/router'
import { editProduct } from '@/store/productAdminSlice'
const initialUserState: User = {
  id: "",
  email: "",
  username: "",
  password: "",
  address: {
    street: "",
    city: "",
  },
  phone: "",
  avatar: "",
  AdminType: false || true,
}
const initialProductState: Product = {
  desc: "",
  id: "",
  image: "",
  price: 0,
  title: "",
  quantity: 0,
}
const AddNew = () => {
  const dispatch = useAppDispatch();
  const [toggle, setToggle] = useState<boolean>(true);
  const handleToggle = () => {
    setToggle(!toggle)
  }
  const [formUserData, setFormUserData] = useState<User>(initialUserState);
  const [formProductData, setFormProductData] = useState<Product>(initialProductState);
  const handleChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setFormUserData((prev) => (
      {
        ...prev,
        username: event.target.value
      }
    ))
  }
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setFormUserData((prev) => (
      {
        ...prev,
        email: event.target.value
      }
    ))
  }
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setFormUserData((prev) => (
      {
        ...prev,
        password: event.target.value
      }
    ))
  }
  const handleChangeAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setFormUserData((prev) => (
      {
        ...prev,
        avatar: event.target.value
      }
    ))
  }
  const handleAddUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const dataUser = { ...formData, id: new Date().getTime().toString() }
    const dataUser = formUserData;
    console.log(formUserData)
    dispatch(addUser(dataUser))
  }
  const router = useRouter();
  const { user } = router?.query;
  useEffect(() => {
    if (user) {
      const editingUser = JSON.parse(user as string) || null;
      setFormUserData(editingUser)
    }
  }, [user])
  const handleEditUser = (id: String) => {
    const dataUser = { ...formUserData, id: id };
    console.log("id", id)
    dispatch(editUser(dataUser))
    router.push({
      pathname: "/Login/Admin"
    });
  }

  // ------------------HANDLE PRODUCT---------------------

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setFormProductData((prev) => (
      {
        ...prev,
        title: event.target.value
      }
    ))
  }
  const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setFormProductData((prev) => (
      {
        ...prev,
        price: Number(event.target.value)
      }
    ))
  }
  const handleChangeDesc = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setFormProductData((prev) => (
      {
        ...prev,
        desc: event.target.value
      }
    ))
  }
  const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setFormProductData((prev) => (
      {
        ...prev,
        image: event.target.value
      }
    ))
  }
  const { product } = router?.query;
  useEffect(() => {
    if (product) {
      setToggle(false)
      const editingProduct = JSON.parse(product as string) || null;
      setFormProductData(editingProduct)
    }
  }, [product])
  const handleEditProduct = (id: String) => {
    const dataProduct = { ...formProductData, id: id };
    console.log("id", id)
    dispatch(editProduct(dataProduct))
    router.push({
      pathname: "/Login/Admin"
    });
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
                  {toggle ? (
                    <form className="form" onSubmit={handleAddUser} >
                      <h3>New User</h3>
                      <div className="group">
                        <input placeholder="‎" type="text" required onChange={handleChangeUserName} value={String(formUserData.username)} />
                        <label htmlFor="name">User Name</label>
                      </div>
                      <div className="group">
                        <input placeholder="‎" type="password" id="password" name="password" required onChange={handleChangePassword} value={String(formUserData.password)} />
                        <label htmlFor="password">Password</label>
                      </div>
                      <div className="group">
                        <input placeholder="‎" type='email' id="email" name="email" required onChange={handleChangeEmail} value={String(formUserData.email)} />
                        <label htmlFor="email">Email</label>
                      </div>
                      <div className="group">
                        <input placeholder="‎" type='text' id="avatar" name="avatar" required onChange={handleChangeAvatar} value={String(formUserData.avatar)} />
                        <label htmlFor="avatar">Avatar</label>
                      </div>
                      {!user ? (
                        <button type="submit" >Submit</button>
                      ) : (
                        <button type='button' onClick={() => handleEditUser(formUserData.id)}>Update</button>
                      )}
                    </form>
                  ) : (
                    <form className="form">
                      <h3>New Product</h3>
                      <div className="group">
                        <input placeholder="‎" type="text" required onChange={handleChangeTitle} value={String(formProductData.title)} />
                        <label htmlFor="title">Title</label>
                      </div>
                      <div className="group">
                        <input placeholder="‎" type='number' id="number" name="number" required onChange={handleChangePrice} value={Number(formProductData.price)} />
                        <label htmlFor="price">Price</label>
                      </div>
                      <div className="group">
                        <input placeholder="‎" type="text" required onChange={handleChangeDesc} value={String(formProductData.desc)} />
                        <label htmlFor="description">Description</label>
                      </div>
                      <div className="group">
                        <input placeholder="‎" type="text" required onChange={handleChangeImage} value={String(formProductData.image)} />
                        <label htmlFor="image">Image</label>
                      </div>
                      {!product ? (
                        <button type="submit" >Submit</button>
                      ) : (
                        <button type='button' onClick={() => handleEditProduct(formProductData.id)}>Update</button>
                      )}
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