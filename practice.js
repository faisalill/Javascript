//start
//Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
//Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
//Consider the number of unique elements of nums be k, to get accepted, you need to do the following things:
//Solution:
var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
          if (nums[i] == nums[i + 1]) {
              nums.splice(i + 1, 1);
              i--;
          }
      }
      return nums.length;
  };
//ends
//start
// Remove Element
// https://leetcode.com/problems/remove-element/
//Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
//The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
//Solution:
var removeElement = function(nums, val) {
    for (let i = 0; i<nums.length ; i++){
        if(nums[i]===val){
            nums.splice(i,1)
            i--;
        }
    }
    return nums.length
};
//ends
//start
//  Concatenation of Array
// https://leetcode.com/problems/concatenation-of-array/
//Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
//Solution:
var getConcatenation = function(nums) {
    let ans = [];
    for (let i = 0; i<nums.length; i++){
    ans[i] = nums[i];
    ans[i+nums.length] = nums[i];        
    }
    return ans;
};
//ends
//start
//  Baseball Game
// https://leetcode.com/problems/baseball-game/
// Input: ops = ["5","2","C","D","+"]
// Output: 30
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "2" - Add 2 to the record, record is now [5, 2].
// "C" - Invalidate and remove the previous score, record is now [5].
// "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
// "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
// The total sum is 5 + 10 + 15 = 30.
//Solution:
var calPoints = function(ops) {
    let ans = [];
  for (let i = 0; i<ops.length; i++){
      if(ops[i]==='+'){
          const lastScore = ans[ans.length-1]
          const secondLastScore = ans[ans.length-2]
          ans.push(lastScore + secondLastScore)
      }
       else if(ops[i]==='D'){
          const lastScore = ans[ans.length-1]
          ans.push(2 * lastScore )
      }
      else if(ops[i]==='C'){
          ans.pop()
      }
      else{
          ans.push(Number(ops[i]))
      }
  }
  return ans.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};
//ends
//start
//Valid Parentheses
//https://leetcode.com/problems/valid-parentheses/
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
//Solution:
var isValid = function(s) {
   while(
    s.indexOf('()') != -1 ||
    s.indexOf('[]') != -1 ||
    s.indexOf('{}') != -1
   ){
         s = s.replace('()', '');
         s = s.replace('[]', '');
         s = s.replace('{}', '');
   }
    if(s.length == 0){
        return true;
    }else{
        return false;
    }

};
//ends
//start
//Contains Duplicate
//https://leetcode.com/problems/contains-duplicate/description/
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
//Solution:
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
 //ends