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

    append(value) {
        if (!this.head) {
            this.head = new Node(value);
            return;
        }

        let pointer = this.head;

        while (pointer.next) {
            pointer = pointer.next;
        }

        pointer.next = new Node(value);
    }

    size() {
        let pointer = this.head;
        let count = 0;

        while (pointer) {
            count++;
            pointer = pointer.next;
        }

        return count;
    }

    get(index) {
        if (!this.head) {
            return null;
        }

        let pointer = this.head;

        for (let i = 1; i <= index; i++) {
            pointer = pointer.next;
            if (!pointer) return null;
        }

        return pointer.value;
    }

    insertAt(index, value) {}
    forEach(callback) {}
}
