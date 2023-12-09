import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

const CustomToast = (message ) => {
    const notify = () => toast(message);
    return notify;
}

export default CustomToast