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
  
  let km = userInput[0].split(' ');
  let SI = 1;
  
  for(let i=0;i<km.length;i++)
  {
      SI = SI*km[i];
  }
  console.log((Math.round((SI/100)*100)/100).toFixed(2));
 
});