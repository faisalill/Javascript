let input = "1881"
let inverseInput = "";
for(let i=0;i<input.length;i++){
    inverseInput =  input[i] + inverseInput;
}
if(inverseInput === input){
    console.log("palindrome")
}
else{
    console.log("Not a palindrome")
}