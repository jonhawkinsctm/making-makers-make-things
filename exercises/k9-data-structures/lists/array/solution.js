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
        return this.length;
    }

    prepend(value) {
        this.insertAt(0, value);
    }

    get(index) {
        if (typeof index !== "number") {
            throw new TypeError("index must be typeof number");
        }

        return this.nodes[index] ?? null;
    }

    insertAt(index, value) {
        if (typeof index !== "number") {
            throw new TypeError("index must be typeof number");
        }

        // This doesn't deal with index gaps eg: [1,2, 4,5]
        for (let i = this.length; i > index; i--) {
            if (i > index) {
                this.nodes[i] = this.nodes[i - 1];
            }
        }

        this.nodes[index] = value;
        this.length++;
    }

    forEach(callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this.nodes[i]);
        }
    }
}
