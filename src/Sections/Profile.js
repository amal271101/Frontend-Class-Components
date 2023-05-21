import "./Section.css";
import profile from "../assets/images/profile.png";
import { FormInputComponent } from "../SharedComponents/FormInput/FormInputComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditButtonClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(({ isEditButtonClicked }) => ({
      isEditButtonClicked: !isEditButtonClicked,
    }));
  }
  render() {
    const SideBar = () => this.props.sidebar;

    return (
      <>
        <div className="section-div profile ">
          <FontAwesomeIcon
            icon={faEdit}
            style={{
              fontSize: "1.5em",
              float: "right",
              marginRight: "7%",
              marginTop: "2%",
            }}
            onClick={this.handleClick}
          />
          <h1 className="section-title">Profile</h1>
          <div>
            <img src={profile} />
          </div>
          <div className="profile-form">
            <form>
              <FormInputComponent
                labelName={"First name"}
                inputName={"firstname"}
                inputType={"text"}
              />
              <br />
              <FormInputComponent
                labelName={"Last name"}
                inputName={"lastname"}
                inputType={"text"}
              />
              <br />
              <FormInputComponent
                labelName={"Username"}
                inputName={"username"}
                inputType={"text"}
              />
              <br />
              <FormInputComponent
                labelName={"E-mail"}
                inputName={"E-mail"}
                inputType={"mail"}
              />
            </form>

            {this.state.isEditButtonClicked && (
              <div className=" profile-buttons">
                <button type="button" className="universal-button">
                  Save
                </button>
                "
                <button type="button" className="universal-button">
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
        <SideBar />
      </>
    );
  }
}
