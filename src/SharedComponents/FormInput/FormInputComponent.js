import React, { Component } from "react";
import "./FormInputComponent.css";
export class FormInputComponent extends Component {
  render() {
    return (
      <input
        type={this.props.inputType}
        name={this.props.inputName}
        placeholder={this.props.labelName}
        className={"input-style"}
        onChange={this.props.onChange}
        defaultValue={this.props.value}
      />
    );
  }
}
