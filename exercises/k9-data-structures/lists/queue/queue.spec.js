import { Queue } from "./problem.js";

describe("Generic queue tests", () => {
  test("enqueue items", () => {
    const queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20); //the queue now should be: 20, 10.

    expect(queue.length()).toBe(2);
  });

  test("dequeue items", () => {
    const queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30); //the queue now should be: 10, 20, 30.
    queue.dequeue();

    expect(queue.length()).toEqual(2);
    expect(queue.get()).toEqual([20, 30]);
  });

  test("is empty", () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);

    queue.enqueue(10);
    expect(queue.isEmpty()).toBe(false);
  });

  test("first item", () => {
    const queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);

    expect(queue.first()).toBe(10);
  });

  test("queue length", () => {
    const queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);

    expect(queue.length()).toBe(2);
  });
});
