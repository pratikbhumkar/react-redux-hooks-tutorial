import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import  AgeReducer  from "./DataStore/AgeStore/AgeReducer";
import  TweetsReducer  from "./DataStore/TweetsStore/TweetsReducer";

const combinedReducers= combineReducers({Age:AgeReducer, Tweets: TweetsReducer});
const combinedStore= createStore(combinedReducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={combinedStore}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
