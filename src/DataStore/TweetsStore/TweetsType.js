import * as TweetOperation from "./TweetsOperations/TweetsOperations";

const INCREMENT = {type:"TWEET_UP", operation: TweetOperation.tweetUp};
const DECREMENT = {type:"TWEET_DOWN", operation: TweetOperation.tweetDown};

var TweetsType= [INCREMENT, DECREMENT];

export default TweetsType;