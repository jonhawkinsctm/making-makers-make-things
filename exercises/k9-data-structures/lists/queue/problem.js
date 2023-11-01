
export class Queue {
  constructor() {
    //a simple array is used to implement a queue (FIFO model).
    this.queueItems = [];
  }

  /*
    Adds a new element to the queue (in the rear position).
    e.g.
      existing queue: (front) 6 9 10 (rear)
      adding 5 as a new element would be: 6 9 10 5
 */
  enqueue(item) {
    return this.queueItems.push(item);
  }

  /*
    Removes the element from the queue (in the first position).
     e.g.
      existing queue: (front) 1 2 3 (rear)
      removing one element: 2 3
   */
  dequeue() {
    if (this.queueItems.length > 0)
      this.queueItems.shift();
  }

  //Returns the first element from the queue (i.e. the one to be first dequeued), but does not delete it.
  first() {
    if (this.queueItems.length > 0)
      return this.queueItems[0];

    return "No items in queue to return";
  }

  //Returns bool value - whether the queue is empty.
  isEmpty() {
    return this.queueItems.length === 0;
  }

  //Returns the length of the queue.
  length() {
    return this.queueItems.length;
  }

  //Returns the queue items (in the correct order) - mainly used for testing.
  get() {
     return this.queueItems;
  }

  reverseFirstXElements(num = this.queueItems.length) {
    if (this.isEmpty()) {
      return [];
    }

    if (num < 0 || num > this.queueItems.length) {
      throw new Error("index outside of range")
    }

    let i = 0;
    let j = num - 1;

    while (i < j) {
      [this.queueItems[i], this.queueItems[j]] = [this.queueItems[j], this.queueItems[i]];
      i++;
      j--;
    }

    return this.queueItems;
  }
}

// time complexity O(n)
// Space complexity O(1)



/*
Reverse the first "x" elements from a queue.
Provide the time / space complexity for the algorithm implemented.

e.g.
- Example queue:
    1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10
- Example "x": 5.
- Result expected:
    5 -> 4 -> 3 -> 2 -> 1 -> 6 -> 7 -> 8 -> 9 -> 10

Note:
 - Consider edge cases as well (e.g. empty queue, negative "x" provided, etc.)
 - Write tests for the happy path (e.g. for the example above), and for at least one unhappy path (e.g. negative "x").
*/
