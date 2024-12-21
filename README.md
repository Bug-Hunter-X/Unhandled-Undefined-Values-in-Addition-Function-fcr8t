# Unhandled Undefined Values in JavaScript Addition Function

This repository demonstrates a common yet subtle error in JavaScript: the improper handling of `undefined` values in arithmetic operations.

## Bug Description
The provided JavaScript function `foo` adds two numbers. While it correctly handles `null` values by returning 0, it fails to explicitly manage `undefined` inputs. When either `a` or `b` is `undefined`, the addition operation returns `NaN` (Not a Number).

## Solution
The solution addresses this issue by explicitly checking for `undefined` values and treating them similar to `null`, returning 0 in these cases. This ensures a consistent and predictable behavior.

## How to Run
1. Clone the repository.
2. Open `bug.js` to see the buggy code and its output.
3. Open `bugSolution.js` to see the corrected version and its output.