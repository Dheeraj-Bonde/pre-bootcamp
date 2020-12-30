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
  
  var a = +userInput[0];
  var b = +userInput[1];
  var c = +userInput[2];
  if(a>b && a>c)
  {
      console.log(a);;
  }
  else
  {
      if(b>a && b>c)
      {
          console.log(b);
      }
      else
      {
          console.log(c);
      }
  }
  

});