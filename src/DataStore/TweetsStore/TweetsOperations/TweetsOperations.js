import {Tweets} from "../../Models/Tweets";

export const tweetUp= (tweets=Tweets)=>{
    tweets.count++;
    return tweets;
}

export const tweetDown= (tweets=Tweets)=>{
    tweets.count--;
    return tweets;
}