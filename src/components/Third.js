import React from "react";
import styled from "styled-components";
import Footer from './Footer';
import ContactForm from './ContactForm';

function Third() {
  return (
    <Wrapper>
      <span>Contact Me</span>
      <section>
        <div className='App'>
          <ContactForm />
        </div>
      </section>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  background-color: #f76565;
  padding: 20px;

  span {
    color: #fff;
    font-size: 40px;
  }

  section {
    color: #fff;
  }
`;

export default Third;
