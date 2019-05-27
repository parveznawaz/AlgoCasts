// --- Directions Print out the n-th entry in the fibonacci series. The
// fibonacci series is an ordering of numbers where each number is the sum of
// the preceeding two. For example, the sequence  [0, 1, 1, 2, 3, 5, 8, 13, 21,
// 34] forms the first ten entries of the fibonacci series. Example:   fib(4)
// === 3

//iterative space complexity 1
// function fib(n) {
//     let i = 2,
//         n1 = 0,
//         n2 = 1;
//     if(n==0) return n1;
//     else if(n==1) return n2;
//     while (i <= n) {
//         let t = n1 + n2;
//         n1 = n2;
//         n2 = t;
//         i++;
//     }
//     return n2;
// }

//iterative
// function fib(n){
//     const result=[0,1];
//     for(let i=2;i<=n;i++){
//         result.push(result[i-1]+result[i-2]);
//     }
//     return result[n];
// }

// function fib(n) {     
//      if(n<2) return n;     
//      return fib(n-1)+fib(n-2); 
// }


//memoization
let arr={};
// function fib(n) {  
//     if(n<2) return n;  
//     if(arr[n]) return arr[n];
//     arr[n]=fib(n-1)+fib(n-2);
//     return arr[n]; 
// }

//memoization with closure
function memoize(fn){
    const cache={};
    return function(...args){
        if(cache[args]){
            return cache[args];
        }
        cache[args]=fn.apply(this,args);
        return cache[args];
    }
}
function slowfib(n){
    if(n<2) return n;
    else return fib(n-1)+fib(n-2);
}
const fib=memoize(slowfib);

module.exports = fib;
