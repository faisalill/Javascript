// Question: 
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