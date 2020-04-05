import AgeType from "./AgeTypes";
import Age from "../Models/Age";

const AgeReducer = (state=Age, action)=>{
    var newState= {...state};
    AgeType.forEach(element => {
        if (element.type === action.type) {
            newState= element.operation(newState);
        }
    });
    return newState;
}

export default AgeReducer;