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
  
  var a = userInput[0];
  var b = userInput[1];
  var area = a*b
  console.log(Math.round(area*10)/10);

});