import {
  faAngleDoubleRight,
  faEdit,
  faTrashAlt,
  faCaretSquareLeft,
  faCaretSquareRight,
} from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DeleteConfirmationPopUp } from "./DeleteConfirmationPopUp";
import { CardDetails } from "./CardDetails";
import withRouter from "./WithRouter";
import { Link } from "react-router-dom";

export class ExpandedCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openPopUp: false,
      isArrowClicked: false,
      openEditPopUp: false,
      openDeletePopUp: false,
      cardData: {},
      isCardTurned:false,
    };
    this.popUpAction = this.popUpAction.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickEdit = this.handleClickEdit.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.closeBoth = this.closeBoth.bind(this);
    this.getCard = this.getCard.bind(this);
    this.handleClickFlip = this.handleClickFlip.bind(this);

  }
  key = this.props.location.key || "default";
  id = this.props.params.id;
  index = this.props.data.findIndex(
    (item) => item.card_id === parseInt(this.id)
  );

  componentDidUpdate() {
    this.id = this.props.params.id;
    this.index = this.props.data.findIndex(
      (item) => item.card_id === parseInt(this.id)
    );
  }
  
  handleClickFlip() {
    this.setState({
      isCardTurned: this.isCardTurned = !this.isCardTurned
   });
  }

  popUpAction() {
    this.setState(({ openPopUp }) => ({ openPopUp: !openPopUp }));
  }

  handleClick() {
    this.setState(({ isArrowClicked }) => ({
      isArrowClicked: !isArrowClicked,
    }));
  }

  handleClickEdit() {
    this.setState(({ openEditPopUp }) => ({ openEditPopUp: !openEditPopUp }));
  }

  handleClickDelete() {
    this.setState(({ openDeletePopUp }) => ({
      openDeletePopUp: !openDeletePopUp,
    }));

  }
  closeBoth() {
    this.setState(({ setOpenEditPopUp }) => ({
      setOpenEditPopUp: !setOpenEditPopUp,
    }));
  }

  navigateToCard(cardId) {
    this.props.navigate(`/deck/${cardId}`);
  }

  getCard(cardId) {
    fetch(`http://127.0.0.1:8085/deck/${cardId}`, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((card) => this.setState({ cardData: card }))
      .catch((error) => this.props.navigate(`/error`));
  }

  deleteItem(cardId) {
    fetch("http://127.0.0.1:8085/deck/" + cardId, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  updateCard(cardId, question, answer) {
    fetch("http://127.0.0.1:8085/deck/+" + cardId, {
      method: "PUT",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({ question: question, answer: answer }),
    })
      .then((res) => res.json())
      .catch((error) => console.error(error));

    console.log("updated card");
  }

  render() {

    return (
      <>
        <div className={"section-div"} key={this.key}>
          {this.state.isArrowClicked && (
            <div
              className={
                (this.state.openEditPopUp || this.state.openDeletePopUp) &&
                "blur-no-fixation"
              }
              style={{
                float: "left",
                margin: "2%",
                marginTop: "2%",
                marginLeft: "1%",
                width: "50%",
              }}
            >
              <FontAwesomeIcon
                icon={faEdit}
                style={{
                  fontSize: "1.5em",
                  marginRight: "5%",
                }}
                onClick={this.handleClickEdit}
              />
              <FontAwesomeIcon
                icon={faTrashAlt}
                style={{
                  fontSize: "1.5em",
                }}
                onClick={this.handleClickDelete}
              />
            </div>
          )}
          <span
            className={
              (this.state.openEditPopUp || this.state.openDeletePopUp) &&
              "blur-no-fixation"
            }
          >
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              style={{
                fontSize: "1.5em",
                float: "right",
                marginRight: "7%",
                marginTop: "2%",
              }}
              onClick={this.handleClick}
            />
          </span>
          <div className={`centeredDiv centeredDivExpandedCard `}>
            <CardDetails
              cardData={this.state.cardData}
              id={this.id}
              expandedCard={true}
              openEditPopUp={this.state.openEditPopUp}
              handleClickEdit={this.handleClickEdit}
              className={
                (this.state.openEditPopUp || this.state.openDeletePopUp) &&
                "blur-no-fixation"
              }
              updateCard={this.updateCard}
              getCard={this.getCard}
              navigate={this.props.navigate}
              params={this.props.params}
              turned={this.props.turned}
              handleClickFlip={this.handleClickFlip}
              isCardTurned={this.state.isCardTurned}
            />
          </div>
          <div
            className={`section-bottom ${
              this.state.openEditPopUp ||
              (this.state.openDeletePopUp && "blur-no-fixation")
            }`}
          >
            {this.props.data[this.index - 1] ? (
              <Link to={`/deck/${this.props.data[this.index - 1]?.card_id}`}  onClick={()=>this.setState({
                isCardTurned: this.isCardTurned = false
             })}>
                <FontAwesomeIcon
                  icon={faCaretSquareLeft}
                  style={{ fontSize: "4em" }}
                />
              </Link>
            ) : null}
            {!(this.index + 1 === this.props.data.length) ? (
              <Link to={`/deck/${this.props.data[this.index + 1]?.card_id}`} onClick={()=>this.setState({
                isCardTurned: this.isCardTurned = false
             })}>
                <FontAwesomeIcon
                  icon={faCaretSquareRight}
                  style={{ fontSize: "4em", float: "right", marginRight: "2%" }}
                />
              </Link>
            ) : null}
          </div>
        </div>

        {this.state.openDeletePopUp && !this.state.openEditPopUp && (
          <DeleteConfirmationPopUp
            handleClick={this.handleClickDelete}
            deleteItem={this.deleteItem}
            setData={this.props.setData}
            data={this.props.data}
            id={this.id}
          />
        )}
        {this.state.openDeletePopUp &&
          this.state.openEditPopUp &&
          this.closeBoth()}

      </>
    );
  }
}

export default withRouter(ExpandedCard);
