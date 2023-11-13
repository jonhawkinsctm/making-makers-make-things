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

  describe("reverse first x elements", () => {
    test("empty queue", () => {
      const queue = new Queue();

      expect(queue.reverseFirstXElements()).toStrictEqual([]);
    })

    test("no input reverses whole list ", () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.reverseFirstXElements()).toStrictEqual([3, 2, 1])
    })

    test("single item list", () => {
      const queue = new Queue();
      queue.enqueue(1);

      expect(queue.reverseFirstXElements()).toStrictEqual([1])
    })

    test("index out of range", () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(() => {queue.reverseFirstXElements(6)}).toThrow();
      expect(() => {queue.reverseFirstXElements(-1)}).toThrow();
    })

    test("reverse first 3 elements of list", () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.enqueue(3);
      queue.enqueue(4);
      queue.enqueue(5);

      expect(queue.reverseFirstXElements(4)).toStrictEqual([3, 3, 2, 1, 4, 5])
    })

    test("reverse first 3 elements of list using queue", () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.enqueue(3);
      queue.enqueue(4);
      queue.enqueue(5);

      expect(queue.reverseElementsQueue(4)).toStrictEqual([3, 3, 2, 1, 4, 5])
    })
  })
});
