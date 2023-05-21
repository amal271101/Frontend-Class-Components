import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import "./Section.css";
import { Card } from "./Card";
import { CreateCardPopUp } from "./CreateCardPopUp";

export class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { openPopUp: false };
    this.popUpAction = this.popUpAction.bind(this);
    this.createCard=this.createCard.bind(this);
  }

 createCard(question, answer) {
    fetch("http://127.0.0.1:8085/deck/", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({ question: question, answer: answer }),
    })
      .then((res) => res.json())
      .catch((error) => console.error(error));
  }
  popUpAction() {
    this.setState(({ openPopUp }) => ({ openPopUp: !openPopUp }));
  }

  //https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_column_cards
  render() {
    const cards =
      this.props.data &&
      this.props.data.map((card) => (
        <div>
          <Card card={card} id={card.card_id} data={this.props.data} />
        </div>
      ));

    const SideBar = () => this.props.sidebar;

    return (
      <>
        <div className={`section-div ${this.state.openPopUp && "blur"}`}>
          <h1 className="section-title">
            Learning Deck
            <FontAwesomeIcon icon={faPlusSquare} onClick={this.popUpAction} />
          </h1>

          <div className="deck-row">{cards}</div>
        </div>
        {this.state.openPopUp && (
          <CreateCardPopUp handleClick={this.popUpAction} createCard={this.createCard} />
        )}
        <SideBar />
      </>
    );
  }
}
