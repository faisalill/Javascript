// Question: 
//https://leetcode.com/problems/two-sum/
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

var twoSum = function(nums, target) {
    for ( let i =0; i<nums.length; i++){
        for(let j = 0; j<nums.length; j++){
            if(j === i){
                continue;
            }
            else {
                if(nums[i]+nums[j] === target){
                    return [i,j]
                }
            }
        }
    }
};