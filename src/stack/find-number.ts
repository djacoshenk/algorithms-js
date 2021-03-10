/*

Find if a given number N exists in a stack S.

Time Complexity: O(n)
Space Complexity: O(1)

*/

export function findNumber(stack: number[], target: number) {
  const tempStack: number[] = [];
  let isInStack = false;

  // if stack has no elements, this becomes zero and falsy
  while (stack.length) {
    if (stack[stack.length - 1] === target) {
      isInStack = true;
    }

    // push the last element of the stack onto the temp stack
    tempStack.push(stack.pop()!);
  }

  while (tempStack.length) {
    stack.push(tempStack.pop()!);
  }

  return isInStack;
}

console.log(findNumber([1, 2, 3, 4, 5], 3));
