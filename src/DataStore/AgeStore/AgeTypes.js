import * as AgeOperation from "./AgeOperations/AgeOperations";

const INCREMENT = {type:"AGE_UP", operation: AgeOperation.ageUp};
const DECREMENT = {type:"AGE_DOWN", operation: AgeOperation.ageDown};

var AgeType= [INCREMENT, DECREMENT];

export default AgeType;