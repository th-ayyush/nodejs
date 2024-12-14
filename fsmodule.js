
const fs=require('fs');

console.log("this is my file");

console.log("starting")
fs.writeFile("harry.text","yo",()=>{
    console.log("done")
})

fs.appendFile("harry.txt","harryrobo",(e,d)=>{
    console.log(d)
})
console.log("ending")
