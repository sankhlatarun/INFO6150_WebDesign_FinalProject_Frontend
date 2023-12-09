import React from 'react'
import '../assets/CSS/LoginStyle.css';

const LoginScreen = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="container main">
        <div className="row1">
            <div className="col-md-6 side-image">
                {/* <!-- image --> */}
                <div className="text">
                    {/* <!-- <P>WORK HARD TRAVEL HARDER</P> --> */}
                </div>
            </div>
            <div className="col-md-6 right">
                <form className="row1 needs-validation" novalidate>
                    <h3 className="headinglogin">Login Screen</h3>
                    <div className="col-md-12">
                        <label for="validationCustom03" className="form-label">User Name</label>
                        <input type="text" className="form-control" id="validationCustom03" required/>
                        <span className="invalid-feedback">
                          Please provide a valid User Name.
                        </span>
                      </div>
                    <div className="col-md-12">
                      <label for="validationCustom02" className="form-label">Password</label>
                      <input type="password" className="form-control" id="validationCustom02" value="" required/>
                      <span className="valid-feedback">
                        Looks good!
                      </span>
                      <span className="invalid-feedback">
                        Please provide a valid Password.
                      </span>
                    </div>
                    <div className="col-12">
                      <button id="myButton" className="btn col-md-12 btn-primary" >Login</button>
                    </div>
                    <div className="login">
                        <span>if you want to register? <a href="/signup">Sign In</a></span>
                    </div>
                  </form>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default LoginScreen
