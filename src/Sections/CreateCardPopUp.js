import { Component } from "react";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FormInputComponent } from "../SharedComponents/FormInput/FormInputComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export class CreateCardPopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: this.props.updateCard ? this.props.question:false,
      answer: this.props.updateCard ? this.props.answer:false,
    };
    this.submitForm = this.submitForm.bind(this);
    this.handleAnswerInput = this.handleAnswerInput.bind(this);
    this.handleQuestionInput = this.handleQuestionInput.bind(this);
  }

  submitForm() {
    this.props.updateCard
      ? this.props.updateCard(
          this.props.id,
          this.state.question,
          this.state.answer
        )
      : this.props.createCard(this.state.question, this.state.answer);
    this.props.handleClick();
  }
  handleAnswerInput(event) {
    this.setState({ answer: event.target.value });
  }

  handleQuestionInput(event) {
    this.setState({ question: event.target.value });
  }

  render() {
    return (
      <div className="popup">
        <h2 className="popup-title">
          <FontAwesomeIcon
            icon={faWindowClose}
            id="close-window"
            onClick={this.props.handleClick}
          />
        </h2>
        <form>
          Question
          <FormInputComponent
            inputName={"Question"}
            inputType={"text"}
            onChange={this.handleQuestionInput}
            value={this.props.question && this.props.question}
          />
          <br />
          Answer
          <FormInputComponent
            inputName={"Answer"}
            inputType={"text"}
            onChange={this.handleAnswerInput}
            value={this.props.answer && this.props.answer}
          />
        </form>
        <div className="popup-button-div">
          <button
            type="button"
            className="universal-button"
            onClick={this.submitForm}
          >
            Save
          </button>
          <button
            type="button"
            className="universal-button"
            onClick={this.props.handleClick}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}
