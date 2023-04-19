import React from 'react'
import Link from "next/link";
import { FaEdit, FaInfo, FaPen, FaProductHunt, FaUser, FaPlusSquare } from 'react-icons/fa';
import SideBar from '@/components/SideBar';
import Content from '@/components/Content';
const Admin = () => {
  return (
    <>
      <SideBar />
      <Content />
    </>
  )
}

export default Admin