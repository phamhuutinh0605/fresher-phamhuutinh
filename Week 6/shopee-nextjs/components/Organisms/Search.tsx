import Image from 'next/image'
import React from 'react'
import { FaBell, FaSearch } from 'react-icons/fa'

const Search = () => {
  return (
    <div className="search__bg">
      <nav>
        <form action="#">
          <div className="admin__search">
            <input type="text" placeholder="Search for something..." />
          </div>
        </form>
        <a href="#" className="search__icon">
          <FaBell />
          <span className="icon__notification">5</span>
        </a>
        <div className="admin__profile">
          <Image src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" width={300} height={100} />
        </div>
        <h3 style={{ color: "black", zIndex: 2 }}>Your name</h3>
      </nav>
    </div>
  )
}

export default Search;