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
 //start
//Reverse Linked List
//https://leetcode.com/problems/reverse-linked-list/
// Given the head of a singly linked list, reverse the list, and return the reversed list.
//Solution:
var reverseList = function(head) {
    if (head === null){return head}
    let arr =[];
    while(head){
        arr.push(head)
        head = head.next
    }
    arr[0].next = null
    for (let i =1; i<arr.length; i++){
        arr[i].next = arr[i-1]
    }
    return arr[arr.length-1]
};
 //ends
 //start
//Merge Two Sorted Lists
//https://leetcode.com/problems/merge-two-sorted-lists/
// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
//Solution:
var mergeTwoLists = function(l1, l2) {
    let list = new ListNode()
    let head = list
    
    while (l1 !== null && l2 !== null) {
	
        if (l1.val < l2.val) {
            list.next = new ListNode(l1.val)
            l1 = l1.next
        } else {
            list.next = new ListNode(l2.val)
            l2 = l2.next
        }
        
        list = list.next
    }
    
    if (l1 !== null)
        list.next = l1
    if (l2 !== null)
        list.next = l2
    
    return head.next
};
 //ends
  //start
//Number of Students Unable to Eat Lunch
//https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/
// The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers 0 and 1 respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.
//Solution:
var countStudents = function(students, sandwiches) {
    let count = 0;
    while (students.length > 0) {
        if (students[0] === sandwiches[0]) {
            students.shift();
            sandwiches.shift();
            count = 0;
        } else {
            students.push(students.shift());
            count++;
        }
        if (count === students.length) {
            return count;
        }
    }
    return count;
};
//ends
//start
//Implement Stack using Queues
//https://leetcode.com/problems/implement-stack-using-queues/
// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).
// Implement the MyStack class:
// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.
//Solution:
var MyStack = function() {
    this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
   this.stack.push(x)    
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.stack.pop()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.stack[this.stack.length -1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    if(this.stack.length === 0){
        return true
    }
    else{
        return false
    }
};
//end
//start
// Fibonacci Number
//https://leetcode.com/problems/fibonacci-number/
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
//Solution:
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
//end
//start
//Climbing Stairs
//https://leetcode.com/problems/climbing-stairs/
// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
//Solution:
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
//end
//start 
// Valid Anagram
//https://leetcode.com/problems/valid-anagram/
// Given two strings s and t , return true if t is an anagram of s, and false otherwise.
//Solution:
var isAnagram = function(s, t) {
    if( s.length !== t.length){
        return false
    }
    for (let i = 0; i<s.length ; i++){
      t =  t.replace(s[i],"")
    }
    return t === ""
};
//end
//start 
//Length of Last Word
//https://leetcode.com/problems/length-of-last-word/
// Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.
// A word is a maximal substring consisting of non-space characters only.
//Solution:
var lengthOfLastWord = function(s) {
    const t = s.trim()
    return  t.split(" ")[t.split(" ").length-1].length
};
//end
//start
//Two Sum
//https://leetcode.com/problems/two-sum/
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//Solution:
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
//end
//start
//Linked List Cycle
//https://leetcode.com/problems/linked-list-cycle/
// Given head, the head of a linked list, determine if the linked list has a cycle in it.
//Solution:
var hasCycle = function(head) {
    let arr = []
    while(head){
        if(arr.includes(head)){
           return true
        }
        else{
            arr.push(head)
            head = head.next
        }
    }
    return false
};
//end
//start
//Binary Search
//https://leetcode.com/problems/binary-search/
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.
//Solution:
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(nums[mid]===target){
            return mid
        }
        else if(nums[mid]>target){
          right = mid -1
        }
        else{
            left = mid +1
        }
    }
    return -1;
  }
//end


