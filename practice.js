//start
//Remove Duplicates from Sorted Array
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
    const stack = [];
    
    for(let i=0; i<ops.length; i++){
        
        switch(ops[i]){
            case 'D': {
                // Record a new score that is double the previous score. 
                // It is guaranteed there will always be a previous score.
                const last = stack[stack.length - 1];
                stack.push(last * 2);
                break;
            }
                
            case 'C':{
                // Invalidate the previous score, removing it from the record. 
                // It is guaranteed there will always be a previous score.
                stack.pop();
                break;
            }
                
            case '+': {
                // Record a new score that is the sum of the previous two scores. 
                // It is guaranteed there will always be two previous scores.
                const one = stack[stack.length - 2];
                const two = stack[stack.length - 1];
                stack.push(one + two);
                break;
            }
                
            default: {
                stack.push(Number(ops[i]))
                break;
            }
        }
    }
    
    return stack.reduce((prev, cur) => prev + cur, 0);
};
//ends
