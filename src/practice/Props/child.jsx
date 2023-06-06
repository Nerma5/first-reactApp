import React from "react";

const Child = ({ text }) => {


  const userTextHandler = () => {
    const data = "hello from child ";
    text(data);
  };


  return (
    <div>
      <button onClick={userTextHandler}>Click to get message from child to parent</button>
    </div>
  );
};

export default Child;
