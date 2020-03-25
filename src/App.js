import React, { Component } from "react";
import { Layout } from "antd";
/* style sheets */
import "antd/dist/antd.css";
import "./index.css";
/* ui components */
import PrimarySearchAppBar from "./ui/header";
import Process from "./ui/process";
import BottomAppBar from "./ui/footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wrong: 0,
      correct: 0,
      tries: 0,
      completed: false,
      userData: {
        correct: { type: "CORRECT", value: null },
        wrong: { type: "WRONG", value: null },
        tries: { type: "TRIES", value: null },
      },
      newData: [],
    };
    this.updateUserData();
  }

  /**
   * update user data for charts
   */
  updateUserData = () => {
    const correct = this.state.correct;
    const wrong = this.state.wrong;
    const tries = this.state.tries;

    let userData = { ...this.state.userData };
    userData.correct.value = correct;
    userData.wrong.value = wrong;
    userData.tries.value = tries;

    this.setState({ userData: userData, newData: Object.values(userData) });
    console.log(Object.values(this.state.newData));
  };

  /**
   * add completed tries
   */
  addTries = () => {
    const tries = this.state.tries + 1;
    this.setState({ tries: tries, completed: true });
  };

  /**
   *
   */
  resetCount = () => {
    this.setState({ wrong: 0, correct: 0, completed: false });
  };

  /**
   *
   */
  addWrong = () => {
    console.log("add to wrong");
    const addValue = this.state.wrong + 1;
    this.setState({ wrong: addValue });
  };

  /**
   *
   */
  addCorrect = () => {
    console.log("add to correct");
    const addValue = this.state.correct + 1;
    this.setState({ correct: addValue });
  };

  render() {
    return (
      <Layout>
        <PrimarySearchAppBar
          tries={this.state.tries}
          wrong={this.state.wrong}
          correct={this.state.correct}
        />
        <Process
          newData={this.state.newData}
          completed={this.state.completed}
          resetCount={this.resetCount}
          addWrong={this.addWrong}
          addCorrect={this.addCorrect}
          addTries={this.addTries}
          updateUserData={this.updateUserData}
        />
        <BottomAppBar />
      </Layout>
    );
  }
}

export default App;
