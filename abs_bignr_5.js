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
  
  var a = userInput[0];
if((a<=12) && (a>=1))
 { 
 if(a==1 || a==3 ||a==5 || a==7 || a==8 || a==10 || a==12)
  {
      console.log(31);
  }
  if(a==4 || a==6 || a==9 || a==11)
  {
      console.log(30);
  }
  if(a == 2)
  {
      console.log(28);
  }
}
  else
  {
      console.log("Error");
  }
});