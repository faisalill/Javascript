// Question: 
//https://leetcode.com/problems/reverse-linked-list/
// Given the head of a singly linked list, reverse the list, and return the reversed list.

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