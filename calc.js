reader.question("What would you like to calculate?", function(input){
let tokens = input.split(' ');

let mathSymbol = tokens[0];
let num1 = Number(tokens[1]);
let num2 = Number(tokens[2]);

    console.log('mathSymbol', mathSymbol);
    console.log('num1', num1);
    console.log('num2', num2);

    reader.close()

});