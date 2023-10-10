export class Node {
    value = null;
    next = null;

    constructor(value) {
        this.value = value;
    }
}

export class LinkedList {
    head = null;

    constructor(head) {
        this.head = head;
    }

    prepend(value) {
        const oldHead = this.head;
        this.head = new Node(value);
        this.head.next = oldHead;
    }

    append(value) {}
    size() {}
    get(index) {}
    insertAt(index, value) {}
    forEach(callback) {}
}
