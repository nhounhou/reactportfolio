import React from "react";
import styled from "styled-components";
import Footer from "./Footer";

function Home() {
  return (
    <Wrapper>
        <img src="Headshot.jpg" alt="headshot" width="200" height="300" ></img>
        <div className="title">Welcome to Michel Nhouyvanisvong Page App!</div>
        <section>
        <p>Entry Level Full Stack developer</p>
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
