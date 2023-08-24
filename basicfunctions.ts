function sum (value1 : number, value2 : number){
    let result = value1 + value2 ;
    console.log(`The sum of ${value1} + ${value2} is : ${result}`);
    return result;
}

function subtraction (value1 : number, value2 : number){
    let result = value1 - value2 ;
    console.log(`The subtraction of ${value1} - ${value2} is : ${result}`);
    return result;
}

function multipilication (value1 : number, value2 : number){
    let result = value1 * value2 ;
    console.log(`The multipilication of ${value1} x ${value2} is : ${result}`);
    return result;
}

function divide (value1 : number, value2 : number){
    let result = value1 / value2 ;
    console.log(`The divide of ${value1} / ${value2} is : ${result}`);
    return result;
}

function exponentation (value1 : number, value2 : number){
    let result = value1 ** value2 ;
    console.log(`The exponentation result of ${value1}  power is ${value2} is : ${result}`);
    return result;
}

function remainder (value1 : number, value2 : number){
    let result = value1 % value2 ;
    console.log(`The Rmainder of ${value1} / ${value2} is : ${result}`);
    return result;
}
export {sum,subtraction,multipilication,divide,exponentation,remainder};