import React from "react";
import "./Login.css";
import "../assets/Bg.jpg";
import {GoogleLoginButton,TwitterLoginButton,FacebookLoginButton,InstagramLoginButton} from "react-social-login-buttons";
import { Link } from "react-router-dom";


export default function (props) {
  
  return (
    
    <div className="Auth-form-container">
        <div className="bg" >
            <form className="Auth-form">
            <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>

            <div className="form-group-mt-3" >
                <label>Email address</label>
                <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                />
            </div>
            <div className="form-group mt-3">
                <label>Password</label>
                <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
            />
          </div>

          
          <div className="btn-format">
            <button type="submit" className="auth-btn">
              Login
            </button>
            <Link to="/register">
            <button type="register" className="auth-btn">
              Register
            </button>
            </Link>
          </div>
          <p className="forgot-password">
            Forgot password?<a href="#"></a>
          </p>
          <div className='SNS-login'>
          <GoogleLoginButton  onClick = { ( )  =>  alert ( "Hello" ) }  / >
          <TwitterLoginButton onClick={() => alert("Hello")} />
          <FacebookLoginButton onClick={() => alert("Hello")} />
          <InstagramLoginButton onClick={() => alert("Hello")} />
          </div>
          

        </div>
        
      </form>
      </div>
    </div>
  )
}
