import React from 'react'
import CustomHeader from '../components/CustomHeader';
import CustomFooter from '../components/CustomFooter';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Layout = () => {
  return (
    <>
    <CustomHeader />
    <Outlet />

    <CustomFooter />
    </>
  )
}

export default Layout