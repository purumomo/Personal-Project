import React from "react";
import "./Login.css";
import "../assets/Bg.jpg";

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
                <label>Nickname</label>
                <input
                type="Nickname"
                className="form-control mt-1"
                placeholder="Enter email"
                />
            </div>
            <div className="form-group mt-3">
                <label>Re-enter password to confirm</label>
                <input
                type="password"
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
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>          
        </div>
        
      </form>
      </div>
    </div>
  )
}