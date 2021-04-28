import React, { useContext } from "react";
import Project from "./Project";
import AlertContext from "../utils/AlertContext";

const Content = (props) => {
  console.log('props',props)
  const alert = useContext(AlertContext);
  return (
    <div className="text-center">
      <h1>{props.title}</h1>
    </div>
  );
};

export default Content;
