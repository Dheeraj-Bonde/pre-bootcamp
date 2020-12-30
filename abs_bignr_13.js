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
  if(+N[0]>+N[1])
  {
      console.log(N[0]);
  }
  else
  {
      console.log(N[1]);
  }

});