// Question: 
//https://leetcode.com/problems/linked-list-cycle/
// Given head, the head of a linked list, determine if the linked list has a cycle in it.

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