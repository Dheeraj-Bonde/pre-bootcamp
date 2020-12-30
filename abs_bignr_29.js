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
  
  let n = userInput[0].split(' ');
  let h = '';
  for(i=0;i<= +n[0] && i<= +n[1];i++)
  {
      if(+n[0]%i ==0 && +n[1]%i ==0)
      {
          h = i;
      }
  }
  console.log(h);
  
});