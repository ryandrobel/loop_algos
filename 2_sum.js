// Sum from 1 to 10, printing out the number and current sum so far at each step of the way
// The expected output will be:
// Num: 1, Sum: 1, Num: 2, Sum: 3, Num: 3, Sum: 6, Num: 4, Sum: 10, Num: 5, Sum: 15 .... etc
var sum=0;
for (var i=1; i <11; i++) {
    sum = sum + i;
    console.log(i);
    console.log(sum);
}
// YOUR CODE HERE 
