import React, { Component } from "react";
import { CardContent } from "./CardContent";

export class Card extends Component {
  render(){
  return (
    <div class="column">
        <CardContent card={this.props.card} id={this.props.card_id} data={this.props.data} 
      />
    </div>
  );
}
}