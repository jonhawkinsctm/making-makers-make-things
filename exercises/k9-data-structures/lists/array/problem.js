export class MyArray {
    nodes = {};
    length = 0;
    constructor() {}

    append(value) {
        this.nodes[this.length] = value;
        this.length++;
        return this;
    }

    size() {}
    prepend(index) {}
    get(index) {}
    insertAt(index, value) {}
    forEach(callback) {}
}
