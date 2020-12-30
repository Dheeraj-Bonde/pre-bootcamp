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

if(Math.round(a)==0)
{
    console.log("Zero");
}
else
{
    if(Math.round(a)%2==0)
{
    console.log("Even");
}
else
{
    console.log("Odd");
}
}

});