import React, { Component } from "react";
import { SideBar } from "./SharedComponents/SideBar/SideBar";
import { QnA } from "./Sections/QnA";
import { Impressum } from "./Sections/Impressum";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Profile } from "./Sections/Profile";
import { LogIn } from "./Authentication/LogIn";
import { SignUp } from "./Authentication/SignUp";
import { Deck } from "./Sections/Deck";
import { ErrorPage } from "./Sections/ErrorPage";
import ExpandedCard from "./Sections/ExpandedCard";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    setInterval(() => {
      fetch("http://127.0.0.1:8085/deck")
        .then((response) => response.json())
        .then((data) => {
          this.setState({ data: data });
        });
    }, 1000);
  }
  render() {
    return (
      <div className="home-container">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Deck
                  sidebar={<SideBar />}
                  data={this.state.data && this.state.data}
                />
              }
            />
            <Route path="/home" element={<SideBar />} />
            <Route path="/qna" element={<QnA sidebar={<SideBar />} />} />
            <Route
              path="/deck"
              element={
                <Deck
                  sidebar={<SideBar />}
                  data={this.state.data && this.state.data}
                />
              }
            />
            <Route
              path="/deck/:id"
              element={
                <ExpandedCard
                  data={this.state.data && this.state.data}
                  turned={false}
                />
              }
            />
            <Route
              path="/impressum"
              element={<Impressum sidebar={<SideBar />} />}
            />
            <Route
              path="/error"
              element={<ErrorPage sidebar={<SideBar />} />}
            />
            <Route path="/login" element={<LogIn />} />
            <Route path="/user" element={<Profile sidebar={<SideBar />} />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
