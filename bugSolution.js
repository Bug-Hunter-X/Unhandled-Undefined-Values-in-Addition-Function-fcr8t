function foo(a, b) {
  // Explicitly handle undefined values
  if (a === null || b === null || a === undefined || b === undefined) {
    return 0; // Handle null and undefined values
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 0
console.log(foo(1, null)); // 0
console.log(foo(null, null));//0
console.log(foo(undefined,2));//0