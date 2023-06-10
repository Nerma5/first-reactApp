import React, { useState } from "react";
import Child from "./child";

const Parent = () => {
  const [message, setMessage] = useState("");

  const Messenger = (data) => {
    setMessage(data);
  };

  return (
    <div>
      <h1>This is: {message}</h1>
      <Child text={Messenger} />
    </div>
  );
};

export default Parent;


