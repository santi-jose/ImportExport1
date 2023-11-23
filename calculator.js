// import functions from different modules
import { add } from "./add.js";
import { subtract } from "./subtract.js";
import { multiply } from "./multiply.js";
import { divide } from "./divide.js";

// arrays of numbers to use for testing calculator functions
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 4, 3, 2, 1];

// start testing calculator functions
console.log("Testing calculator functions.");
for(let i = 0; i < arr1.length; i++){
    console.log(`add(${arr1[i]}, ${arr2[i]}): ${add(arr1[i], arr2[i])}`);
    console.log(`subtract(${arr1[i]}, ${arr2[i]}): ${subtract(arr1[i], arr2[i])}`);
    console.log(`multiply(${arr1[i]}, ${arr2[i]}): ${multiply(arr1[i], arr2[i])}`);
    console.log(`divide(${arr1[i]}, ${arr2[i]}): ${divide(arr1[i], arr2[i])}`);
}