import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { success } from "../Utils/notification";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { logoutAPI } from "../Redux/authentication/auth.action";


const CustomHeader = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.data.token);
  const handlelogout = () => {
    Cookies.remove("jwttoken");
    Cookies.remove("userid");
    dispatch(logoutAPI());
    navigate("/");
    success("Logout Successfully");
  };

  return (
    <div  >
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" style={{ background: 'transparent' }}>
        <div className="container">
          {/* <a className="navbar-brand" href="/index.html"><span className="text-danger">DREAM</span>TRAVEL</a> */}
          <Link className="nav-link" to="/"><span className="text-danger">DREAM</span>TRAVEL</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link m-2" to="/">Home</Link>
                {/* <a className="nav-link" href="./index.html">Home</a> */}
              </li>
              <li className="nav-item ">
                {/* <a className="nav-link" href="./hotels">Hotels</a> */}
                <Link className="nav-link m-2" to="/hotels">Hotels</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link m-2" to="/bus">Busses</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link m-2" href="./Assignment6-Flight/FlightIndex.html">Flights</a>
              </li>
              <li className="nav-item">
                <a className="nav-link m-2" href="#contact">Contact US</a>
              </li>
              <li>
                {
                  isAuthenticated && <p>
                    {user.nickname}
                  </p>
                }

              </li>
              {/* {
                isAuthenticated ? (
                  <li>
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                      Log Out
                    </button>
                  </li>
                ) : (
                  <li>
                    <button onClick={() => loginWithRedirect()}>Log In</button>
                  </li>
                )
              } */}

              <li>
              <div>
            {token ? (
              <button
                className="m-2 p-1 btn-outline-success"
                style={{
                  // backgroundColor: "blue",
                  borderRadius: "10px",
                  border: "none",
                  marginRight: "8px",
                  color: "black",
                }}
                onClick={() => handlelogout()}
              >
                Logout
              </button>
            ) : (
              <div>
                {" "}
                <button
                  className="m-2 p-1 btn-outline-success"
                  onClick={() => navigate("/signin")}
                  style={{
                    // backgroundColor: "green",
                    borderRadius: "10px",
                    border: "none",
                    marginRight: "8px",
                    color: "black",
                  }}
                >
                  Sign In
                </button>
              </div>
            )}
          </div>
              </li>


            </ul >
          </div >
        </div >
      </nav >
    </div>
  )
}

export default CustomHeader