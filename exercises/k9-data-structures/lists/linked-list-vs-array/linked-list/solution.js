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

    size() {
        let pointer = this.head;
        let count = 0;

        while (pointer) {
            count++;
            pointer = pointer.next;
        }

        return count;
    }

    #getNodeAt(index) {
        if (index < 0) {
            throw new Error(`index out of bounds`);
        }

        let pointer = this.head;
        let count = 0;

        while (pointer) {
            if (count === index) {
                return pointer;
            }

            count++;
            pointer = pointer.next;
        }
    }

    get(index) {
        return this.#getNodeAt(index)?.value ?? null;
    }

    append(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            return;
        }

        let pointer = this.head;

        while (pointer.next) {
            pointer = pointer.next;
        }

        node.next = pointer.next;
        pointer.next = node;
    }

    insertAt(index, value) {
        if (index === 0) {
            this.prepend(value);
            return;
        }

        if (index > this.size()) {
            this.append(value);
            return;
        }

        const node = new Node(value);
        const currentInPosition = this.#getNodeAt(index - 1);

        if (currentInPosition) {
            node.next = currentInPosition.next;
            currentInPosition.next = node;
        }
    }

    forEach(callback) {
        let pointer = this.head;

        while (pointer) {
            callback(pointer.value);
            pointer = pointer.next;
        }
    }

    *[Symbol.iterator]() {
        let pointer = this.head;

        while (pointer) {
            yield pointer.value;
            pointer = pointer.next;
        }
    }
}
