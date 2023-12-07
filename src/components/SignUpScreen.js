import React from 'react'
import "../assets/CSS/SignUpStyle.css"

const SignUpScreen = () => {
  return (
    <div>
       <div className="wrapper">
        <div className="container main">
        <div className="row2">
            <div className="col-md-6 side-image">
                {/* <!-- image --> */}
                <div className="text">
                    {/* <!-- <P>WORK HARD TRAVEL HARDER</P> --> */}
                </div>
            </div>
            <div className="col-md-6 right">
                <form className="row2 needs-validation" novalidate>
                    <h3 className="headinglogin">SignUp Screen</h3>
                    <div className="col-md-12">
                        <label for="validationCustom03" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="validationCustom03" required/>
                        <span className="invalid-feedback">
                          Please provide a valid First Name.
                        </span>
                      </div>
                      <div className="col-md-12">
                        <label for="validationCustom03" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="validationCustom03" required/>
                        <span className="invalid-feedback">
                          Please provide a valid Last Name.
                        </span>
                      </div>
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
                      <button className="btn col-md-12 btn-primary" type="submit">Sign Up</button>
                    </div>
                    <div className="login">
                        <span>if you want to Login? <a href="/login">Login In</a></span>
                    </div>
                  </form>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default SignUpScreen
