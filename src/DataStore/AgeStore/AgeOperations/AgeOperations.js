import Age from "../../Models/Age";

export const ageUp= (age=Age)=>{
    age.count++;
    return age;
}

export const ageDown= (age=Age)=>{
    age.count--;
    return age;
}