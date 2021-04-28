import React from "react";
import { VscGithub } from 'react-icons/vsc';
import { TiSocialFacebook } from 'react-icons/ti';
import { RiAtLine } from 'react-icons/ri';

const Footer = () => (
  <div className="footer">
    <p>Michel Nhouyvanisvong 
      <a href='https://www.facebook.com/nhounhou/'><TiSocialFacebook /></a>
      <a href='https://github.com/nhounhou'><VscGithub /></a>
      <a href='mailto:mnhounhou@gmail.com'><RiAtLine /></a>
    </p>
  </div>
);

export default Footer;