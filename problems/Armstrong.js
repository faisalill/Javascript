let number = 371;
let convertedNum = number.toString()
let sum = null;
for(let i = 0; i<convertedNum.length;i++){
 sum = convertedNum[i] ** 3 + sum
}
if(sum === number){
    console.log("it is an armstrong")
}
else{
    console.log("Not an armstrong")
}