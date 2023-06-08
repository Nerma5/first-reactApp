import React from "react";

const ParentChild = ({ text }) => {

    const inputText = (e) =>{
        const data = e.target.value
        data(text)
    }


  return (
    <>
      <form>
        <input placeholder="Text" onChange={inputText} />
      </form>
    </>
  );
};

export default ParentChild;
