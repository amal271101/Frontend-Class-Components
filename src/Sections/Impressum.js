import React, { Component } from "react";
import "./Section.css";
export class Impressum extends Component {
  render(){
    const SideBar =() =>  this.props.sidebar;
  return (
    <>
    <div className="section-div">
      <h1 className="section-title">Impressum</h1>
      <p  className="section-text">
        This Webapp was created by Amal Mostafa for her Bachelor Thesis that compares class components with functional components in React.js.
      </p>
    </div>
    <SideBar/>
  </>
  );
}
}
