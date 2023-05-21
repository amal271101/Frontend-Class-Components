import { faExchange, faExpand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CardContent extends Component {
  constructor(props) {
    super(props);
    this.state = { isCardTurned: false };
    this.handleFlip = this.handleFlip.bind(this);
  }
  handleFlip() {
    this.setState({
      isCardFlipped: this.isCardTurned = !this.isCardTurned
   });
  }
  

  render() {

    return (
      <div
        className={`card ${this.props.className}`}
        onClick={this.props.expandedCard && this.props.handleClickFlip}
        contentEditable={this.props.editable}
      >
        {!this.props.expandedCard && (
          <Link to={`/deck/${this.props.card?.card_id}`} >
            <FontAwesomeIcon
              icon={faExpand}
            
            />
          </Link>
        )}
    
        {(!this.props.isCardTurned && this.props.expandedCard )|| (!this.props.expandedCard && !this.state.isCardFlipped)? (
          <p>{this.props.card?.question}</p>
        ) : (
          <p>{this.props.card?.answer}</p>
        )}
        {!this.props.expandedCard && (
          <FontAwesomeIcon icon={faExchange} onClick={this.handleFlip } />
        )}
      </div>
    );
  }
}
