import React, { Component } from "react";

import "./Section.css";
export class QnA extends Component {
  render(){
  const SideBar =() =>  this.props.sidebar;
  return (
    <div>
    <div className="section-div">
      <h1 className="section-title">Questions and Answers</h1>
    </div>
   <SideBar/>
   </div>
  );
}
}
