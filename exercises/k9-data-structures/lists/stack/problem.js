export class Stack {
  constructor() {
    //a simple array is used to implement a stack (LIFO model).
    this.stackItems = [];
  }

  /*
    Adds a new element to the stack (in the front position).
    e.g.
      existing stack:
          10 (front)
          9
          6 (rear)
      adding 5 as a new element would be:
          5
          10
          9
          6
  */
  push(item) {
    return this.stackItems.push(item);
  }

  /*
    Removes the element from the stack (in the front position).
     e.g.
      existing stack:
          5 (front)
          10
          9
          6 (rear)
      removing one element:
          10 (front)
          9
          6 (rear)
  */
  pop() {
    if (this.stackItems.length > 0)
      this.stackItems.pop();
  }

  /*
    Returns the front element from the stack, but does not delete it.
    e.g.
      existing stack:
          5 (front)
          10
          9
          6 (rear)
      returns 5.
  */
  peek() {
    if (this.stackItems.length > 0)
      return this.stackItems[this.stackItems.length - 1];

    return "No items in stack to return";
  }

  //Returns bool value - whether the stack is empty.
  isEmpty() {
    return this.stackItems.length === 0;
  }

  //Returns the length of the stack.
  length() {
    return this.stackItems.length;
  }

  //Returns the stack items (in the correct order) - mainly used for testing.
  get() {
    return this.stackItems;
  }
}

/*
 Check whether a certain string has matching pairs of delimiters.
 Provide the time / space complexity for the algorithm implemented.

  Note: The string will only be formed off the following accepted delimiters: "(", ")", "[", "]", "{", "}", """, "'".
  e.g.
  - Example string 1 : []()""{"[()]"}
    Expected Result: Valid!
  - Example string 2: []()""{"[()]]"}
    Expected Result: Invalid! (13th character is not correct)

 Note:
   - Consider edge cases as well (e.g. empty stack, etc.)
   - Write tests for the happy path, and for at least one unhappy path.
 */
