// Question: 
//https://leetcode.com/problems/climbing-stairs/
// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let firstNum = 1
    let secondNum = 2
    let sum = 0
    if(n===1){
        return 1
    }
    else if(n===2){
        return 2
    }
    else{
        for(let i = 2; i<n; i++){
            sum = firstNum + secondNum
            firstNum = secondNum
            secondNum = sum
        }
        return sum
    }
};