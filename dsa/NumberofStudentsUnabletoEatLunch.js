// Question: 
//https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/
// The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers 0 and 1 respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.

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