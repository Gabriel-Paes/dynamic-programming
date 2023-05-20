const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(6)); // result -> 8
console.log(fib(7)); // result -> 13
console.log(fib(8)); // result -> 21
//console.log(fib(50)); // result -> 12586269025
