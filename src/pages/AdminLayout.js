import React from 'react'
import CustomHeader from '../components/CustomHeader';
import CustomFooter from '../components/CustomFooter';
import { Outlet } from 'react-router-dom';
const AdminLayout = () => {
  return (
    <>
    <CustomHeader />
    <Outlet />
    <CustomFooter />
    </>
  )
}

export default AdminLayout