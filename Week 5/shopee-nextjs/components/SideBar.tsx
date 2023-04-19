import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaEdit, FaInfo, FaPen, FaProductHunt, FaUser, FaPlusSquare } from 'react-icons/fa';

const SideBar = () => {
  return (
    <section className="sidebar">
      <div className="sidebar__brand">
        <Image src="https://designrevision.com/demo/shards-dashboard-lite-react/static/media/shards-dashboards-logo.60a85991.svg" alt="" width={30} height={30} />
       <span> Admin</span>
      </div>
      <hr />
      <ul className="sidebar__menu">
        <li>
          <Link href="/Login/Admin/Admin"><FaPen />Admin Dashboard</Link>
        </li>
        <li>
          <a href=""><FaUser />Users</a>
        </li>
        <li>
          <a href=""><FaProductHunt />Products</a>
        </li>
        <li>
          <Link href="/Login/Admin/AddNew"><FaPlusSquare />Add New</Link>
        </li>
        <li>
          <a href=""><FaEdit />User Profile</a>
        </li>
        <li>
          <Link href="/404"><FaInfo />Errors</Link>
        </li>
      </ul>
    </section>
  )
}

export default SideBar