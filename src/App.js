
import React, {useState} from "react";
import FetchData from "./FetchData";
//using states 06:37

function App() {
const [name, setName] = useState("nerma")
  return (
    <div className="App">
      {/* <h1>Hello react</h1> */}
      {/* <CreatTweet />
      <TweetList name={name} />
      <TweetList /> */}
      <FetchData />
    
    </div>
  );
}

export default App;
