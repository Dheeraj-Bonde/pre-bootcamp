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
  var area = 0.25*Math.sqrt(3)*Math.pow(a,2);
  console.log(Math.round(area*100)/100);

});