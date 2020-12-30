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
  
  var N = +userInput[0];
  var R = "";
  if(N==0)
  {
      console.log("Null")
  }
  else
  {
      for(i=1;i<=N;i++)
      {
        R +=(9*i)+" ";
      }
      console.log(R);
      
  }
});