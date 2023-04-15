// Question: 
//https://leetcode.com/problems/implement-stack-using-queues/
// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).
// Implement the MyStack class:
// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.

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