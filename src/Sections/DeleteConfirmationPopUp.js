import React from "react";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export function DeleteConfirmationPopUp(props) {
  function handledeleteItem() {
    props.deleteItem(props.id);
    props.handleClick();
  }
  return (
    <div className="delete-popup">
      <h2 className="popup-title">
        <FontAwesomeIcon
          icon={faWindowClose}
          id="close-window"
          onClick={props.handleClick}
        />
      </h2>
      <h3 className="center">
        Are you sure you want to delete{" "}
        {props.profile ? " your profile" : "this Card"} ?
      </h3>
      <div style={{ bottom: "2%", position: "absolute", width: "100%" }}>
      <Link to="/deck">
        <button
          type="button"
          style={{ float: "left", marginLeft: "0.5%" }}
          className="delete-popup-button"
          onClick={handledeleteItem}
        >
          Yes
        </button>
        </Link>
        <button
          type="button"
          style={{ float: "rigth", marginRight: "0.5%" }}
          className="delete-popup-button"
          onClick={props.handleClick}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
