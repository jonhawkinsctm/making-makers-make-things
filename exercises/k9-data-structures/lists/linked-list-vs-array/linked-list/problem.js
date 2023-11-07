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
        }

        let pointer = this.head;
        while (pointer.next) {
            pointer = pointer.next
        }

        pointer.next = new Node(value);
    }
    size() {
        let count = 0;
        let pointer = this.head

        while (pointer) {
            pointer = pointer.next;
            count++;
        }

        return count;
    }
    get(index) {

        if (index > this.size() - 1) {
            console.log(this.size())
            console.log(index)
            console.log("error thrown")
            throw new Error('index out of bounds')
        }

        if (!this.head) return null;

        let pointer = this.head;
        for (let i = 0; i < index; i++) {
            if (!pointer.next) return null
            pointer = pointer.next;
        }
        return pointer.value
    }
    insertAt(index, value) {

        if (index > this.size()) {
            throw new Error ('index out of bounds');
        }

        if (index === 0) {
            this.prepend(value);
        }

        if (index === this.size()) {
            this.append(value);
        }

        let pointer = this.head;
        for (let i = 0; i < index - 1; i++) {
            if (!pointer.next) return null
            pointer = pointer.next;
        }

        if (!pointer.next) return null

        const nextPointer = pointer.next
        const newNode = new Node(value);
        pointer.next = newNode
        newNode.next = nextPointer

    }
    forEach(callback) {
        let pointer = this.head;

        while (pointer) {
            callback(pointer.value)
            pointer = pointer.next;
        }
    }
}
