// Question: 
// Input: ops = ["5","2","C","D","+"]
// Output: 30
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "2" - Add 2 to the record, record is now [5, 2].
// "C" - Invalidate and remove the previous score, record is now [5].
// "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
// "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
// The total sum is 5 + 10 + 15 = 30.

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