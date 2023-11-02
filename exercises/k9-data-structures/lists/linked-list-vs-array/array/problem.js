export class MyArray {
    nodes = {};
    length = 0;
    constructor() {}

    append(value) {
        this.nodes[this.length] = value;
        this.length++;
        return this;
    }

    size() {
        return this.length
    }
    prepend(value) {
        const temp = {};
        temp[0] = value;
        for (let i = 0; i < this.length; i++) {
            temp[i + 1] = this.nodes[i]
        }
        this.nodes = temp;
        this.length++
        return this
    }
    get(index) {
        if (index < this.length) {
            return this.nodes[index];
        }
        return null;
    }
    insertAt(index, value) {
        const temp = { ...this.nodes }
        this.nodes[index] = value
        for (let i = index + 1; i < this.length + 1; i++) {
            this.nodes[i] = temp[i - 1]
        }
        this.length++
        return this
    }
    forEach(callback) {
        for (let i = 0; i < this.length; i++) {
            callback(i);
        }
    }
}

[1, 2, 3]
[1, 2, 3, 3]
[1, 2, 2, 2]
