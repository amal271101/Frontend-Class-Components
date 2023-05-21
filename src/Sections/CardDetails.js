import { Component } from "react";
import { CardContent } from "./CardContent";
import { CreateCardPopUp } from "./CreateCardPopUp";
import withRouter from "./WithRouter";
export class  CardDetails extends Component {
 id=this.props.params.id
 intId = parseInt(this.id);
 stringId = (this.id).toString();

 key=this.props.location
 intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.props.getCard(this.props.params.id);
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.params.id !== prevProps.params.id) {
      this.props.getCard(this.props.params.id);
     this.key=this.props.location

    }
  }
render(){

  return (
    <>
      {!this.props.cardData && this.props.navigate(`/error`)}
      <CardContent
        card={this.props.cardData}
        expandedCard={true}
        className={this.props.className}
        turned={false}
        key={this.key}
        handleClickFlip={this.props.handleClickFlip}
        isCardTurned={this.props.isCardTurned}
      />
      {this.props.openEditPopUp && (
        <CreateCardPopUp
          question={this.props.cardData.question}
          answer={this.props.cardData.answer}
          handleClick={this.props.handleClickEdit}
          updateCard={this.props.updateCard}
          id={this.props.id}
        />
      )}
    </>
  );
}
}export default withRouter(CardDetails);
