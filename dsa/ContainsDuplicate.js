// Question: 
//https://leetcode.com/problems/contains-duplicate/description/
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function(nums) {
    var duplicate=[];
    for (let i = 0; i<nums.length;i++){
        if(duplicate.includes(nums[i])){
            return true
        }
        else{
            duplicate.push(nums[i])
        }
    }
    return false
 };