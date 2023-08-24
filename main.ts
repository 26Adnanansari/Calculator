import inquirer from "inquirer";
import {sum,subtraction,multipilication,divide,exponentation,remainder} from "./basicfunctions.js"
const value1 = await inquirer.prompt({
    message : "Please Enter a value",
    type : "number",
    name : "value1"    
 })

 const value2 = await inquirer.prompt({
    message : "Please Enter a value",
    type : "number",
    name : "value2"    
 })
 console.log( `Your values are ${value1.value1}  and  ${value2.value2}\n what do you want Please Select options`);
 console.log( `1 for sum\n2 for subtract\n3 for multipily\n4 for divide\n5 for exponentation\n6 for remainder`);
 const selectednum = await inquirer.prompt({
    message : "Please Enter a Selected Number",
    type : "number",
    name : "selectnum"    
 })

 if (selectednum.selectnum === 1){
    sum(value1.value1,value2.value2);
 }

 if (selectednum.selectnum === 2){
    subtraction(value1.value1,value2.value2);
 }

  if (selectednum.selectnum === 3){
    multipilication(value1.value1,value2.value2);
 }

 if (selectednum.selectnum === 4){
    divide(value1.value1,value2.value2);
 }
 
 if (selectednum.selectnum === 5){
    exponentation(value1.value1,value2.value2);
 }

 if (selectednum.selectnum === 6){
    remainder(value1.value1,value2.value2);
 }