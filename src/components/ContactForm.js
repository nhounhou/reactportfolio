import React, { useState } from "react";
import { BiEnvelope } from "react-icons/bi";
import { FcGoogle,FcHome,FcPhoneAndroid } from "react-icons/fc";

const ContactForm = () => {
  return (
    <div>
        <FcGoogle /> <a href="mailto:mnhounhou@gmail.com">Michel Nhouyvanisvong</a>
        <br></br><br></br> 
        <address>
        Visit me at <FcHome />:<br></br> 
        2207 bridgette blvd<br></br> 
        Greensboro, NC 27407<br></br> 
        USA
        </address>
        <FcPhoneAndroid /> 336 989 9459
    </div>
  );
};

export default ContactForm;