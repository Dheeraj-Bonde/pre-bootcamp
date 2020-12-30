// Getting input via STDIN
const readline = require("readline");123456

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  
  let n = userInput[0].split('');
  let r = [];
  
  for(let i=0; i<n.length; i++)
  {
      r[n.length - i] = n[i];
  }
  console.log(r.join(''));
    
});