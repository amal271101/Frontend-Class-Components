import React, { Component } from "react";
import "./Authentication.css";
import { FormInputComponent } from "../SharedComponents/FormInput/FormInputComponent";
import { Link } from "react-router-dom";

export class LogIn extends Component {
  render() {
    return (
      <div className="container">
        <div className="centeredDiv login-div">
          <h1 className="authentication-title">Log In</h1>
          <form>
            <FormInputComponent
              labelName="Username"
              inputName="username"
              inputType="text"
            />
            <br />
            <FormInputComponent
              labelName="Password"
              inputName="password"
              inputType="password"
            />
          </form>
          <div className="button-div">
            <Link to="/deck">
              <button
                type="button"
                className="submit-button"
              >
                Log In
              </button>
            </Link>

            <br />
            <Link to="/signup">
              <button
                type="button"
                className="register-button"
              >
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
