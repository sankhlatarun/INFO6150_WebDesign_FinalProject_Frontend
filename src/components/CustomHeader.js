import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const CustomHeader = () => {
const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();
 

  return (
    <div  >
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/index.html"><span className="text-danger">DREAM</span>TRAVEL</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="./index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./hotelManagement/index.html">Hotels</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./Bus/index.html">Busses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./Assignment6-Flight/FlightIndex.html">Flights</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact US</a>
              </li>
              <li>
                { 
                  isAuthenticated && <p>
                   {user.nickname} 
                  </p>
                  }
                   
              </li>
              {
                isAuthenticated ? (
                  <li>
                  <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                      Log Out
                    </button>
                  </li>
                ):(
                  <li>
                  <button onClick={() => loginWithRedirect()}>Log In</button>
                  </li>
                )
              }
             
             
            </ul>
          </div>
        </div>
      </nav>    
    </div>
  )
}

export default CustomHeader