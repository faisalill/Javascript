// Question: 
//https://leetcode.com/problems/valid-parentheses/
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

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