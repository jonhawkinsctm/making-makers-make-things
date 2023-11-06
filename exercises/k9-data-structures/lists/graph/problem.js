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

    removeNode(key) {
        const removedNode = this.findNode(key)
        this.nodes = this.nodes.filter(node => node !== removedNode)
        for (const [nodes, direction] of this.edges) {
            if (nodes.includes(key)) {
                this.edges.delete(nodes)
            }
        }
    }

    removeEdge(a, b) {
        const key = JSON.stringify([a, b]);
        this.edges.delete(key);
    }

    findNode(key) {
        for (const item of this.nodes) {
            if (item['key'] === key) {
                return item;
            }
        }
    }

    hasEdge(a, b) {
        return this.adjacent(a).includes(b)
    }

    setEdgeWeight(a, b, weight) {
        const key = JSON.stringify([a, b]);
        const updatedValue = {a: a, b: b, weight: weight};
        this.edges.set(key, updatedValue);

    }

    getEdgeWeight(a, b) {
        for (const [key, value] of this.edges) {
            if (key === JSON.stringify([a, b])) {
                return value.weight
            }
        }
    }

    adjacent(key) {
        let adjacentKeys = [];
        for (const edge of this.edges) {
            if (edge[1]['a'] === key) {
                adjacentKeys.push(edge[1]['b']);
            }
        }
     return adjacentKeys
    }

    indegree(key) {
        let count = 0;
        for (const [edgeKey, value] of this.edges) {
            if (value.b === key) {
                count += 1;
            }
        }
        return count;
    }

    outdegree(key) {
        return this.adjacent(key).length
    }
}

/*
Graph
-----------------------------
Exercise - Complete the missing methods to make the tests go green
*/
