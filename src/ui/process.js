import React, { Component } from "react";
import "antd/dist/antd.css";
import "../index.css";
import { Result, Steps, Button, message, Row } from "antd";
import { Checkbox } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import { Row as BootstrapRow } from "react-bootstrap";
import {
  LayoutTwoTone,
  ProfileTwoTone,
  SettingTwoTone,
  ThunderboltTwoTone,
  BuildTwoTone,
  ExperimentTwoTone,
  ApiTwoTone,
} from "@ant-design/icons";

const { Step } = Steps;

const answers = [3, 2, 3, 1, 2, 3, 1];

const Q1 = {
  question: {
    label: "React creates a virtual DOM",
    value: "1",
  },
  question2: { label: "Compiled", value: "2" },
  question3: { label: "Rendering", value: "3" },
};

const Q2 = {
  question1: {
    label: "Regular JavaScript",
    value: "1",
  },
  question2: { label: "Syntax Extension", value: "2" },
  question3: { label: "ES6 JavaScript", value: "3" },
};
const Q3 = {
  question1: {
    label: "",
    value: "1",
  },
  question2: { label: "compiled", value: "2" },
  question3: { label: "rendering", value: "3" },
};

export default class Process extends Component {
  process = [
    {
      title: "1st",
      content: (
        <motion.div
          initial={{ opacity: 0, x: "50vh" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-30vw" }}
        >
          <Result
            icon={<ApiTwoTone />}
            title="Q1. How React works?"
            subTitle="more descriptions go here"
            extra={[
              <Checkbox.Group
                onChange={(values) => this.onChange(values, 1)}
                options={Object.values(Q1)}
              />,
            ]}
          />
        </motion.div>
      ),
    },
    {
      title: "2nd",
      content: (
        <motion.div
          initial={{ opacity: 0, x: "50vw" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-50vw" }}
        >
          <Result
            icon={<ExperimentTwoTone />}
            title="Q2. What is JSX?"
            subTitle="more descriptions go here"
            extra={[
              <Checkbox.Group
                onChange={(values) => this.onChange(values, 2)}
                options={Object.values(Q2)}
              />,
            ]}
          />
        </motion.div>
      ),
    },
    {
      title: "3rd",
      content: (
        <motion.div
          initial={{ opacity: 0, x: "-50vw" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "50vw" }}
        >
          <Result
            icon={<BuildTwoTone />}
            title="Q3. What is React.createClass?"
            subTitle="more descriptions go here"
            extra={[
              <Checkbox.Group
                onChange={(values) => this.onChange(values, 3)}
                options={Object.values(Q2)}
              />,
            ]}
          />
        </motion.div>
      ),
    },
    {
      title: "4th",
      content: (
        <motion.div
          initial={{ opacity: 0, x: "-50vw" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "50vw" }}
        >
          <Result
            icon={<SettingTwoTone />}
            title="Q4. What is ReactDOM?"
            subTitle="more descriptions go here"
            extra={[
              <Checkbox.Group
                onChange={(values) => this.onChange(values, 4)}
                options={Object.values(Q2)}
              />,
            ]}
          />
        </motion.div>
      ),
    },
    {
      title: "5th",
      content: (
        <motion.div
          initial={{ opacity: 0, x: "-50vw" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "50vw" }}
        >
          <Result
            icon={<ProfileTwoTone />}
            title="Q5. What is a higher order component?"
            subTitle="more descriptions go here"
            extra={[
              <Checkbox.Group
                onChange={(values) => this.onChange(values, 5)}
                options={Object.values(Q2)}
              />,
            ]}
          />
        </motion.div>
      ),
    },
    {
      title: "6th",
      content: (
        <motion.div
          initial={{ opacity: 0, x: "-50vw" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "50vw" }}
        >
          <Result
            icon={<LayoutTwoTone />}
            title="Q6. What is the difference between state and props?"
            subTitle="more descriptions go here"
            extra={[
              <Checkbox.Group
                onChange={(values) => this.onChange(values, 6)}
                options={Object.values(Q2)}
              />,
            ]}
          />
        </motion.div>
      ),
    },
    {
      title: "7th",
      content: (
        <div>
          <motion.div
            initial={{ opacity: 0, x: "-50vw" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "50vw" }}
          >
            <Result
              icon={<ThunderboltTwoTone />}
              title="Q7. What are controlled components?"
              subTitle="more descriptions go here"
              extra={[
                <Checkbox.Group
                  onChange={(values) => this.onChange(values, 7)}
                  options={Object.values(Q2)}
                />,
              ]}
            />
          </motion.div>
        </div>
      ),
    },
    {
      title: "Done",
      content: (
        <motion.div
          initial={{ opacity: 0, x: "-50vw" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "50vw" }}
        >
          <div style={{ textAlign: "center" }}>
            <Result
              status="success"
              title="Successfully Completed Short Quiz"
              subTitle="User stats: takes 1-5 minutes, please wait."
              extra={[]}
            />
          </div>
        </motion.div>
      ),
    },
  ];

  /**
   * TODO
   *
   * @param {TODO} props
   */
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  /**
   * TODO
   *
   * @param {TODO} checkedValues
   * @param index
   */
  onChange(checkedValues, index) {
    const answerIndex = index - 1;
    if (checkedValues[0] === answers[answerIndex].toString()) {
      console.log("correct answer");
      message.success("correct!");
      this.props.addCorrect();
      this.next();
    } else if (Object.values(checkedValues).length !== 0 || undefined) {
      console.log(
        "selected : ",
        checkedValues,
        " is wrong ",
        answers[answerIndex]
      );
      this.props.addWrong();
      message.warn("wrong!");
    }
  }

  /**
   * TODO
   */
  restart() {
    const current = 0;
    this.props.resetCount();
    this.setState({ current: current });
  }

  /**
   * TODO
   */
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  /**
   * TODO
   */
  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  /**
   * renders Steps content
   * @return {!*}
   */
  render() {
    const { current } = this.state;
    return (
      <div style={{ margin: "20px" }}>
        <Steps current={current}>
          {this.process.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>

        <AnimatePresence exitBeforeEnter>
          <div className="steps-content">{this.process[current].content}</div>
        </AnimatePresence>

        <div className={"steps-action"}>
          {current > 0 && current < 7 && (
            <motion.div
              style={{ display: "table-cell" }}
              initial={{ opacity: 0, x: "-50vw" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "50vw" }}
            >
              <Button style={{ margin: 8 }} onClick={() => this.prev()}>
                Previous
              </Button>
            </motion.div>
          )}
          {current < this.process.length - 1 && (
            <motion.div
              style={{ display: "table-cell" }}
              initial={{ opacity: 0, x: "-50vw" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "50vw" }}
            >
              <Button type="primary" onClick={() => this.next()}>
                Next
              </Button>
            </motion.div>
          )}
          {current === this.process.length - 1 && (
            <motion.div
              style={{ display: "table-cell" }}
              initial={{ opacity: 0, x: "-50vw" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "50vw" }}
            >
              <Button
                type="primary"
                onClick={() => message.success("Processing complete!")}
              >
                Done
              </Button>
            </motion.div>
          )}
          {current === this.process.length - 1 && (
            <motion.div
              style={{ display: "table-cell" }}
              initial={{ opacity: 0, x: "-50vw" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "50vw" }}
            >
              <Button
                type={"primary"}
                style={{ margin: 8 }}
                onClick={() => this.restart()}
              >
                Restart
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    );
  }
}
