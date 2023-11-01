export class Graph {
    constructor(directed = true) {
        this.directed = directed;
        this.nodes = [];
        this.edges = new Map();
    }

    addNode(key, value = key) {
        this.nodes.push({ key, value });
    }

    addEdge(a, b, weight) {
        this.edges.set(JSON.stringify([a, b]), { a, b, weight });
        if (!this.directed) {
            this.edges.set(JSON.stringify([b, a]), {a: b, b: a, weight});
        }
    }

    removeNode(key) {}

    removeEdge(a, b) {}

    findNode(key) {}

    hasEdge(a, b) {}

    setEdgeWeight(a, b, weight) {}

    getEdgeWeight(a, b) {}

    adjacent(key) {}

    indegree(key) {}

    outdegree(key) {}
}

/*
Graph
-----------------------------
Exercise - Complete the missing methods to make the tests go green
*/
