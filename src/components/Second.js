import React, { useContext } from "react";
import styled from "styled-components";
import Project from "./Project";
import AlertContext from "../utils/AlertContext";

function Second() {
    const alert = useContext(AlertContext);
  return (
    <Wrapper>
      <span>Portfolio</span>
      <section>
      <row>
        <button onClick={() => alert.onClick("Portfolio Homework", true)} className="btn btn-primary mx-3">
          Portfolio
        </button>
        <button onClick={() => alert.onClick("Password Generator Homework", true)} className="btn btn-primary mx-3">
          Passord Generator
        </button>
        <button onClick={() => alert.onClick("Coding Quizz Homework", true)} className="btn btn-primary mx-3">
          Coding Quizz
        </button>
        <button onClick={() => alert.onClick("Work Day Scheduler Homework", true)} className="btn btn-primary mx-3">
          Work Day Scheduler
        </button>
        <button onClick={() => alert.onClick("Weather Dashboard Homework", true)} className="btn btn-primary mx-3">
          Weather Dashboard
        </button>
        <button onClick={() => alert.onClick("Good Readme Generator Homework", true)} className="btn btn-primary mx-3">
          Good Readme Generator
        </button>
        <button onClick={() => alert.onClick("Team Profile Generator Homework", true)} className="btn btn-primary mx-3">
          Team Profile Generator
        </button>
        <button onClick={() => alert.onClick("Note Taker Homework", true)} className="btn btn-primary mx-3">
          Note Taker
        </button>
        <button onClick={() => alert.onClick("Employee Tracker Homework", true)} className="btn btn-primary mx-3">
          Employee Tracker
        </button>
        <button onClick={() => alert.onClick("Eat-Da-Burger Homework", true)} className="btn btn-primary mx-3">
          Eat-Da-Burger
        </button>
        <button onClick={() => alert.onClick("Fitness Tracker Homework", true)} className="btn btn-primary mx-3">
          Fitness Tracker
        </button>
        <button onClick={() => alert.onClick("Progressive Budget Homework", true)} className="btn btn-primary mx-3">
          Progressive Budget
        </button>
        <button onClick={() => alert.onClick("Employee Directory Homework", true)} className="btn btn-primary mx-3">
          Employee Directory
        </button>
      </row>
      <br></br>
      <br></br>
      <row>
        <button onClick={() => alert.onClick("Get Coupons Project", true)} className="btn btn-success mx-3">
          Get Coupons
        </button>
        <button onClick={() => alert.onClick("Subscriptions Tracker Project", true)} className="btn btn-success mx-3">
          Subscriptions Tracker
        </button>
      </row>
      <Project style={{ opacity: alert.display ? 1 : 0 }} type={alert.theme}>
        You pressed a {alert.theme} button!
      </Project>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  background-color: #00bfff;
  padding: 20px;

  span {
    color: #fff;
    font-size: 40px;
  }

  section {
    color: #fff;
  }
`;

export default Second;
