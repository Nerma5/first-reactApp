
import React, {useState} from "react";
import FetchData from "./FetchData";

function App() {
const [name, setName] = useState("nerma")
  return (
    <div className="App">
      {/* <h1>Hello react</h1> */}
      {/* <CreatTweet />
      <TweetList name={name} /> */}
      <TweetList />
      <FetchData />
    
    </div>
  );
}

export default App;
