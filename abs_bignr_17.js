// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  
  let N = userInput[0].split(' ');
  let a = +N[0];
  let b = +N[1];
  let c = +N[2];
  let x1,x2;
  
  x1= (-b+Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a);
  x2= (-b-Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a);
 
  console.log((Math.round(x1*100)/100).toFixed(2));
  console.log((Math.round(x2*100)/100).toFixed(2));
  
});