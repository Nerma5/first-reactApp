import React, { useState } from "react";
import ParentChild from "./Child";

const MainParent = () => {
  const [mess, setMess] = useState("");

  const messHandler = (e) => {
    setMess(e.target.value);
  };

  return (
    <>
    <h1>this is: {mess}</h1>
      <ParentChild text={messHandler} />
    </>
  );
};

export default MainParent;
