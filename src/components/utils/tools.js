import React from "react";
import { ToastContainer, toast } from "react-toastify";

export const errHelper = (formik, values) => ({
    error:formik.errors[values] && formik.touched[values] ? true : false,
    helperText: formik.errors[values] && formik.touched[values] ? formik.errors[values] : null
});

export const showToast = (type, msg) => {
    switch(type){

        case 'success' :
            toast.success(msg,{
                position:toast.POSITION.BOTTOM_LEFT
            })
            break;

        case 'error':
            toast.error(msg,{
                position:toast.POSITION.BOTTOM_RIGHT
            })

            break;

        default:
            return false;
    }
}