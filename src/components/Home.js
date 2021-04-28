import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import { DiBootstrap,DiCss3,DiGithubBadge,DiHeroku,DiHtml5,DiJsBadge,DiNodejsSmall,DiNpm,DiReact } from "react-icons/di";

function Home() {
  return (
    <Wrapper>
        <img src="images/HeadshotNew.jpg" alt="headshot" width="auto" height="300" ></img>
        <div className="title">Welcome to Michel Nhouyvanisvong Page App!</div>
        <section>
        <p>Entry Level Full Stack developer</p>
        <h2><DiJsBadge/><DiHtml5/><DiBootstrap/><DiCss3/></h2>
        <h2><DiNodejsSmall/><DiNpm/></h2>
        <h2><DiReact/><DiGithubBadge/><DiHeroku/></h2>
        </section>
        <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  background-color: #333;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  div.title {
    font-size: 40px;
    font-weight: bold;
  }
  section {
    p {
      font-size: 20px;
    }
  }
`;

export default Home;
