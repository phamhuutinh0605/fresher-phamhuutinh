import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaEdit, FaInfo, FaPen, FaProductHunt, FaUser, FaPlusSquare } from 'react-icons/fa';

const SideBar = () => {
  return (
    <section className="sidebar">
      <div className="sidebar__brand">
        <Image src="https://designrevision.com/demo/shards-dashboard-lite-react/static/media/shards-dashboards-logo.60a85991.svg" alt="" width={30} height={30} />
        <Link href="/"> Admin</Link>
      </div>
      <hr />
      <ul className="sidebar__menu">
        <li>
          <Link href="/Login/Admin"><FaPen />Admin Dashboard</Link>
        </li>
        <li>
          <Link href="/Login/Admin"><FaUser />Users</Link>
        </li>
        <li>
          <Link href=""><FaProductHunt />Products</Link>
        </li>
        <li>
          <Link href="/Login/Admin/AddNew"><FaPlusSquare />Add New</Link>
        </li>
        <li>
          <Link href=""><FaEdit />User Profile</Link>
        </li>
        <li>
          <Link href="/404"><FaInfo />Errors</Link>
        </li>
      </ul>
    </section>
  )
}

export default SideBar