import TweetsType from "../TweetsStore/TweetsType";
import {Tweets} from "../Models/Tweets";

const TweetsReducer = (state=Tweets, action)=>{
    var newState= {...state};
    TweetsType.forEach(element => {
        if (element.type === action.type) {
            newState= element.operation(newState);
        }
    });
    return newState;
}

export default TweetsReducer;