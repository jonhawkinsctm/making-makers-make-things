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

    insert(parentNodeKey, key, value = key) {};

    find(key) {};

    remove(key) {};
}

/*
The Orlov meerkat family tree
-----------------------------
Exercise -
1. complete the insert and find methods to make the first tests go green
2. When Maiya and her child are disowned after "the mongoose affair", complete the remove
method and find out who is left in the Orlov meerkat family tree (tests are commented out for this part).

Extra points for an explanation of the use of generator functions
*/
