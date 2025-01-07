function factorial(n) {
  if (typeof n !== 'number') {
    console.log("Invalid input");
    return;
  }
  if (n < 0) {
    console.log("Invalid input");
    return;
  }
  if (n === 0) {
    return 1; 
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));
console.log(factorial(-2));
console.log(factorial(0));
