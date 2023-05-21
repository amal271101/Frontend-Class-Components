import React, { Component } from "react";
import "./Authentication.css";
import { FormInputComponent } from "../SharedComponents/FormInput/FormInputComponent";
import { Link } from "react-router-dom";

export class SignUp extends Component {
  render() {
    return (
      <div className="container">
        <div className="centeredDiv centeredDivRegister">
          <h1 className="authentication-title">Sign Up</h1>
          <form>
            <FormInputComponent
              labelName={"First name"}
              inputName={"firstname"}
              inputType={"text"}
            />
            <br />
            <FormInputComponent
              labelName={"Last name"}
              inputName={"lastname"}
              inputType={"text"}
            />
            <br />
            <FormInputComponent
              labelName={"Username"}
              inputName={"username"}
              inputType={"text"}
            />
            <br />
            <FormInputComponent
              labelName={"Email"}
              inputName={"email"}
              inputType={"email"}
            />
            <br />
            <FormInputComponent
              labelName={"Password"}
              inputName={"password"}
              inputType={"password"}
            />
            <br />
            <FormInputComponent
              labelName={"Confirm Password"}
              inputName={"passwordconfirmation"}
              inputType={"password"}
            />
          </form>
          <div className="button-div">
            <Link to="/login">
              <button type="button" className="register-button">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
