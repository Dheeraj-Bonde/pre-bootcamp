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
  
  let n = userInput[0].split('');
  let sum = 0;
  for(i=0;i<n.length;i++)
  {
      sum = sum + +n[i];
  }
  console.log(sum);
  
});