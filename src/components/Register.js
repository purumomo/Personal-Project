import React from "react"
import "./Register.css"
import "../assets/Bg.jpg"


export default function (props) {
    
  return (
    
    <div className="Auth-form-container">
        <div className="bg" >
            <form className="Auth-form">
            <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
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
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
        
      </form>
      </div>
    </div>
  )
}