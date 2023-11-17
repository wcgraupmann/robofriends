import React from "react";

const Scroll = (props) => {
  return (
    // add style in div with double curly brackets
    // this is a javascript expression, within this I'm returning an object
    // this object can have css styles
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid black",
        height: "800px",
      }}
    >
      {props.children}
    </div>
  );
};
export default Scroll;
