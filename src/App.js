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
      status: "",
    };
  }

  /**
   *
   */
  resetCount = () => {
    this.setState({ wrong: 0, correct: 0 });
  };

  /**
   *
   */
  addWrong = () => {
    console.log("add to wrong");
    const addValue = this.state.wrong + 1;
    this.setState({ wrong: addValue, status: "error" });
  };

  /**
   *
   */
  addCorrect = () => {
    console.log("add to correct");
    const addValue = this.state.correct + 1;
    this.setState({ correct: addValue, status: "finish" });
  };

  render() {
    return (
      <Layout>
        <PrimarySearchAppBar
          wrong={this.state.wrong}
          correct={this.state.correct}
        />
        <Process
          status={this.state.status}
          resetCount={this.resetCount}
          addWrong={this.addWrong}
          addCorrect={this.addCorrect}
        />
        <BottomAppBar />
      </Layout>
    );
  }
}

export default App;
