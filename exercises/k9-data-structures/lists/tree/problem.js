class TreeNode {
    constructor(key, value = key, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.children = [];
    }

    get isLeaf() {
        return this.children.length === 0;
    };

    get hasChildren() {
        return !this.isLeaf;
    };
}

export class Tree {
    constructor(key, value = key) {
        this.root = new TreeNode(key, value);
    };

    *preOrderTraversal(node = this.root) {
        yield node;
        if (node.children.length) {
            for (let child of node.children) {
                yield* this.preOrderTraversal(child);
            }
        }
    };

    *postOrderTraversal(node = this.root) {
        if (node.children.length) {
            for (let child of node.children) {
                yield* this.postOrderTraversal(child);
            }
        }
        yield node;
    };

    insert(parentNodeKey, key, value = key) {
        let parentNode = this.find(parentNodeKey);
        let newNode = new TreeNode(key, value, parentNode);
        parentNode.children.push(newNode);

    };
    find(key) {
        for (let node of this.preOrderTraversal()) {
            if (node.key === key) {
                return node;
            }
        }
        return undefined
    };
    remove(key) {
        for (let node of this.preOrderTraversal()) {
            const filtered = node.children.filter(c => c.key !== key);
            console.log(filtered)
            if (filtered.length !== node.children.length) {
                node.children = filtered;
                return true;
            }
        }
        return false;
    }
}

/*
The Orlov meerkat family tree
-----------------------------
Exercise -
1. complete the insert and find methods to make the first tests go green
2. When Maiya and her child are disowned after "the mongoose affair", complete the remove
method and find out who is left in the Orlov meerkat family tree (tests are commented out for this part).

Extra points for an explanation of the use of generator functions

The generator functions do the following:

preOrderTraversal:

This traverses all of the nodes, starting from the root node (or a node of your choosing)
through to all the of children node and their children etc.
The 'yeild node' part means that when you run the functions
you can access each node through a loop function or similar.

postOrderTraversal

This traverses through all of the nodes first before yielding
Therefore to loop through these would be to loop through all
the children nodes first and up through the tree, finishing at the root node.
*/
