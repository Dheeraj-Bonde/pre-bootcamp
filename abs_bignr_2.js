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
  
  var r = userInput[0];
  if(r<0)
  {
      console.log("Error");
  }
  else
  {
  circumference = (22/7)*2*r;
  console.log(Math.round(circumference*100)/100);
  }
});