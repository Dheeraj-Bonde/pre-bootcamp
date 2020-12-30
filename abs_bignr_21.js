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
  
  let N = userInput[0].split('');
  let asc = N.sort(function(a, b){return a-b});
  let r = '';
  let m = '';
  
  for(i=0;i<N.length;i++)
  {
      if(asc[i]%2===0)
      {
          r += N[i];
      }
      else
      {
          m += N[i];
      }
  }
  console.log(r.split('').join(' '));
  console.log(m.split('').join(' '));
});