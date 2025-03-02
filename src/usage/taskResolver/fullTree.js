/* eslint-disable */

class Node {
    constructor(value, left, right) {
        this.value = value
        this.left = left
        this.right = right
    }

    toJSON() {
        const result = { value: this.value };
        if (this.left) {
            result.left = this.left.toJSON()
        }

        if (this.right) {
            result.right = this.right.toJSON()
        }
        return result;
    }
}

class CompleteBinaryTree {
    constructor() {
        this.root = null;
        this.queue = []
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode
            this.queue.push(newNode)
            return;
        }

        const parent = this.queue[0]

        if (parent && !parent.left) {
            parent.left = newNode
        } else if (parent && !parent.right) {
            parent.right = newNode
            this.queue.shift()
        }

        this.queue.push(newNode)
    }

    asJson() {
        return this.root.toJSON()
    }
}

function arrayToTree(array) {
    if (!array.length) {
        return undefined
    }

    const tree = new CompleteBinaryTree()
    for (const value of array) {
        tree.insert(value)
    }

    return tree.asJson()
}

// function arrayToTree(values, i = 0) {
//     if (i >= values.length) return;
//     return new TreeNode(values[i], arrayToTree(values, 2 * i + 1),
//         arrayToTree(values, 2 * i + 2));
// }

console.log(arrayToTree([17, 0, -4, 3, 15] ))
