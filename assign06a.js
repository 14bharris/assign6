/*
 * Lab4a.js - Triangular number calculator
 * Author: Brad Harris
 * Modified: 9/25/14
 */

var triangular = function(n){
var input = document.getElementById("values").value;
var n = parseInt(input);
var result = 0;
for(var i = 1; i <= n; i++){
    result = result+i;
}
var output = document.getElementById('result');
output.innerHTML = 'Your triangular number is: ' + result;
}
var button = document.getElementById('runner');
button.onclick = triangular;

var fibonacci = function(n){
var input = document.getElementById("value").value;
var n = parseInt(input);
    if (n=== 0){
        return 0;
}
else if(n === 1){
        return 1;
}
    else{
        var fib1 = 1;
        var fib2 = 0;
        var result = 0;
        for(var i = 1; i < n; i ++){
            result = fib1 + fib2;
            fib2 = fib1;
            fib1 = result;
        } 
    }
var output = document.getElementById('final');
output.innerHTML = 'Your triangular number is: ' + result;
}
var button = document.getElementById('run');
button.onclick = fibonacci;








