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
  
  var A = +userInput[0];
if(A%4==0)
{
    console.log("Y");
}
else
{
    console.log("N");
}
});