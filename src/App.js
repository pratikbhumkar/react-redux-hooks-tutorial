import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const Age = useSelector((state) => state.Age);
  const Tweets = useSelector((state) => state.Tweets);
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Tutorial for React-Redux using functional components using hooks!{" "}
        </h2>
        <h4>Age: {Age.count}</h4>
        <div>
          <button onClick={() => dispatch({ type: "AGE_UP" })}>
            Increase Age!
          </button>
          <button onClick={() => dispatch({ type: "AGE_DOWN" })}>
            Decrease Age!
          </button>
        </div>
        <h4>Tweets: {Tweets.count}</h4>
        <div>
          <button onClick={() => dispatch({ type: "TWEET_UP" })}>
            Increase Tweets!
          </button>
          <button onClick={() => dispatch({ type: "TWEET_DOWN" })}>
            Decrease Tweets!
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
