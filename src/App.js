
import CreatTweet from "./components/CreatTweet";
import Tweet from "./components/Tweet";
import TweetList from "./components/TweetList";
import React, {useState} from "react";
//using states 06:37


function App() {

  return (
    <div className="App">
      <h1>Hello react</h1>
      <CreatTweet />
      <TweetList />
      <TweetList />
      <TweetList />
      <br />
      <br />

      <button>Click</button>
    </div>
  );
}

export default App;
