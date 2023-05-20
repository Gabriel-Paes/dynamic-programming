const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.log(fib(6)); // result -> 8
console.log(fib(7)); // result -> 13
console.log(fib(8)); // result -> 21
console.log(fib(50)); // result -> 12586269025
