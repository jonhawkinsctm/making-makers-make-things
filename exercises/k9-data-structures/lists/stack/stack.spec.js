import { Stack } from "./problem.js";

describe("Generic stack tests", () => {
  test("push items", () => {
    const stack = new Stack();
    stack.push(10);
    stack.push(20);
    /*
       The stack now should be:
         20
         10
     */

    expect(stack.length()).toBe(2);
  });

  test("pop items", () => {
    const stack = new Stack();
    stack.push(10);
    stack.push(20);
    stack.push(30);
    /*
      The stack now should be:
        30
        20
        10
    */

    stack.pop();

    expect(stack.length()).toEqual(2);
    expect(stack.get()).toEqual([10, 20]);
  });

  test("is empty", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);

    stack.push(10);
    expect(stack.isEmpty()).toBe(false);
  });

  test("first item", () => {
    const stack = new Stack();
    stack.push(10);
    stack.push(20);

    expect(stack.peek()).toBe(20);
  });

  test("stack length", () => {
    const stack = new Stack();
    stack.push(10);
    stack.push(20);

    expect(stack.length()).toBe(2);
  });

});

describe("test delimiter stacks", () => {
  test("empty string", () => {
    const stack = new Stack();
    expect(stack.isDelimiter("")).toBe("Invalid")
  });

  test("incorrect characters", () => {
    const stack = new Stack();
    expect(stack.isDelimiter("()whoops")).toBe("Invalid")
  })

  test("base case", () => {
    const stack = new Stack();
    expect(stack.isDelimiter("()")).toBe("Valid")
  })

  test("false base case", () => {
    const stack = new Stack();
    expect(stack.isDelimiter("(")).toBe("Invalid")
  })

  test("complex string pass", () => {
    const stack = new Stack();
    expect(stack.isDelimiter("[]()\"\"{\"[()]\"}")).toBe("Valid")
  })

  test("complex string fail", () => {
    const stack = new Stack();
    expect(stack.isDelimiter("[]()\"\"{\"[()]]\"}")).toBe("Invalid")
  })

  test("quotes only fail", () => {
    const stack = new Stack();
    expect(stack.isDelimiter("\"\"\"")).toBe("Invalid")
  })

  test("quotes only pass", () => {
    const stack = new Stack();
    expect(stack.isDelimiter("\"\"\"\"")).toBe("Valid")
  })
})
