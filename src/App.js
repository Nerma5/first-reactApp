// import logo from './logo.svg';
// import './App.css';
// import Tweet from "./components/Tweet";
import CreatTweet from "./components/CreatTweet";
import TweetList from "./components/TweetList";
import React, {useState} from "react";
//using states 06:37


function App() {
  const sayHello = (user) =>{
    console.log(`i just wanted to say hello to ${user}`) //events
  }
  return (
    <div className="App">
      <h1>Hello react</h1>
      {/* <CreatTweet />
      <TweetList /> */}
      <button onClick={()=> sayHello("Nerma")}>Click</button>
    </div>
  );
}

export default App;
