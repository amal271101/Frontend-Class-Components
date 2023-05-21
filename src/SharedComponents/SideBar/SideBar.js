import React, { Component } from "react";
import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {
  faUser,
  faFolderOpen,
  faQuestionCircle,
  faInfo,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

export class SideBar extends Component {
  render() {
    return (
      <div>
        <div className="sidebar-container">
          <div className="sidebar">
            <Link to="/user">
              <FontAwesomeIcon icon={faUser} />
            </Link>

            <Link to="/deck">
              <FontAwesomeIcon icon={faFolderOpen} />
            </Link>

            <Link to="/qna">
              <FontAwesomeIcon icon={faQuestionCircle} />
            </Link>

            <Link
              to="/impressum"
              style={{
                marginLeft: "28px",
                fontSize: "25px",
              }}
            >
              <FontAwesomeIcon icon={faInfo} />
            </Link>

            <Link
              to="/login"
              style={{
                marginTop: "950%",
                fontSize: "25px",
                marginBottom: "0px",
              }}
            >
              <FontAwesomeIcon icon={faSignOutAlt} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
