import React from "react";
import styled from "styled-components";
import Footer from './Footer';

function First() {
  return (
    <Wrapper>
      <span>About me</span>
      <section>
        <h3>
            I was born in <strong><a href="https://en.wikipedia.org/wiki/Australia">Australia</a></strong>, my parents are from  <strong><a href="https://en.wikipedia.org/wiki/Laos">Laos</a></strong>. When I was 4, we had to fly away and we arrived in France. Where I was raised for the next 34 years. I got my Associate degree in Computer Science and work as an Analyst-Programmer for 9 years. I was programming in Cobol. I moved to North Carolina in late 2007, and didn't do any programming related work for the next 10 years. I only got back at programming since 2017. My hobby are my families, I'm married and have 3 children. I also play <a href="https://www.youtube.com/watch?v=1sPOZlTdB7g" target="_blank">Badminton</a> but since the pandemic start I didn't had a chance to play.
        </h3>
          <br></br>
        <h2>
          I'm attending the <a href="https://bootcamp.unc.edu/coding/landing/?s=Google-Brand_RFull_&msg_cv_scta=4&msg_cv_stbn=1&msg_cv_fcta=1&fqvar1=3&pkw=unc%20coding%20bootcamp&pcrid=453416712854&pmt=e&utm_source=google&utm_medium=cpc&utm_campaign=GGL%7CUNC-CHAPEL-HILL%7CSEM%7CCODING%7C-%7COFL%7C_RFull_%7CALL%7CBRD%7CEXACT%7CCore%7CBootcamp&utm_term=unc%20coding%20bootcamp&s=google&k=unc%20coding%20bootcamp&utm_adgroupid=103795446457&utm_locationphysicalms=9009651&utm_matchtype=e&utm_network=g&utm_device=c&utm_content=453416712854&utm_placement=&gclid=CjwKCAjwx6WDBhBQEiwA_dP8rekkz10_DkyAU3dN4Ekvzqsej7XlZtT08dX9yF7Xg20SdsmXujSlYxoCrtgQAvD_BwE&gclsrc=aw.ds" target="_blank">UNC Chapel Hill BootCamp</a> to be a Full Stack Web Developer, and will graduated in late May of 2021.
        </h2>    
      </section>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  background-color: #00d38a;
  padding: 20px;

  span {
    color: #fff;
    font-size: 40px;
  }

  section {
    padding-top: 50px;
    padding-left: 300px;
    padding-right: 300px;
    color: #fff;
    text-align: justify;
    text-justify: inter-word;
  }
`;

export default First;
