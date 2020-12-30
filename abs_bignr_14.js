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
  
  for(i=0;i<N[1];i++)
  {
      console.log(N[0]);
  }
});