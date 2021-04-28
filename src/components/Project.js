import React from "react";

const Project = props => {
  console.log('props',props)
  return (
    <div
      role="alert"
      // className={`alert alert-${props.type} fade in`}
      style={{ width: "80%", margin: "0 auto", marginTop: 18, ...props.style }}
    >
      {props.children}
    </div>
  );
};

export default Project;
