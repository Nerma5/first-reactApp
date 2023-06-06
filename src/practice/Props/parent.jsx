import React, { useState } from "react";
import Child from "./child";

const Parent = () => {
  const [message, setMessage] = useState("");

  const Messanger = (data) => {
    setMessage(data);
  };

  return (
    <div>
      <h1>This is: {message}</h1>
      <Child text={Messanger} />
    </div>
  );
};

export default Parent;
