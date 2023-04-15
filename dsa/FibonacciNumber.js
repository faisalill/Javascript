// Question: 
//https://leetcode.com/problems/fibonacci-number/
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let firstNum = 0
    let secondNum = 1
    let sum = 0
    if(n===0){
        return 0
    }
    else if(n===1){
        return 1
    }
    else{
        for(let i = 1; i<n; i++){
            sum = firstNum + secondNum
            firstNum = secondNum
            secondNum = sum
        }
        return sum
    }
};