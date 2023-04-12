// Question: 
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
//Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
//Consider the number of unique elements of nums be k, to get accepted, you need to do the following things:

var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
          if (nums[i] == nums[i + 1]) {
              nums.splice(i + 1, 1);
              i--;
          }
      }
      return nums.length;
  };