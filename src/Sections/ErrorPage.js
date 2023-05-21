import React, { Component } from "react";

export class ErrorPage extends Component {
  render() {
    const SideBar = () => this.props.sidebar;
    return (
      <>
        <div className="section-div">
          <h1 className="section-title">Error</h1>
          <p className="section-text">This link is not valid</p>
        </div>
        <SideBar />
      </>
    );
  }
}
