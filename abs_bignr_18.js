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
  
  let N = userInput[0];
  if(N>=0)
  {
      if(N>0)
      {
        console.log(Math.pow(N,2));  
      }
      else
      {
          console.log(0);
      }
  }
  else
  {
      console.log('Error');
  }

});