import {
  AUTH_LOG_IN_SUCCESS,
  AUTH_LOG_IN_ERROR,
  AUTH_LOG_OUT,
} from "./auth.types";
import axios from "axios";
import Cookies from "js-cookie";
import { error, success } from "../../Utils/notification";

export const loginAPI = (data, navigate) => async (dispatch) => {
  try {
    let response = await axios.post("https://dream-travels.onrender.com/user/login", data);
    console.log(response);
    if (response.data.status === "Failed") {
      error(response.data.message);
    } else {
      Cookies.set("jwttoken", response.data.message.token, {
        expires: new Date(new Date().getTime() + 60 * 60 * 1000),
      });
      Cookies.set("userid", response.data.message.user._id, {
        expires: new Date(new Date().getTime() + 60 * 60 * 1000),
      });
      Cookies.set("userRole", response.data.message.user.role, {
        expires: new Date(new Date().getTime() + 60 * 60 * 1000),
      });
      Cookies.set("userEmail", response.data.message.user.email, {
        expires: new Date(new Date().getTime() + 60 * 60 * 1000),
      });
      Cookies.set("userGender", response.data.message.user.gender, {
        expires: new Date(new Date().getTime() + 60 * 60 * 1000),
      });
      dispatch({
        type: AUTH_LOG_IN_SUCCESS,
        payload: response.data,
      });
      success("Sign In successfully");
      console.log(response.data.message.user.role);
      console.log(response.data.message.user);
      if(response.data.message.user.role === "admin"){
        navigate("/admin");
        window.location.href = "./../admin";
        console.log("admin");
        return;
      }else{
        console.log("user");
        window.location.href = "./../";

        navigate("/");
      }
    }
  } catch (error) {
    dispatch({
      type: AUTH_LOG_IN_ERROR,
    });
    console.log(error);
  }
};

export const logoutAPI = () => ({ type: AUTH_LOG_OUT });

