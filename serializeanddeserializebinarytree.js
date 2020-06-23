//Objective is to create a serialize and deserialize function for a binary tree.

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(1)
tree.addLeftNode(tree.root, 2)
tree.addRightNode(tree.root, 5)
tree.addLeftNode(tree.root.left, 3)
tree.addRightNode(tree.root.right, 6)
tree.addRightNode(tree.root.left, 4)


//O(n) solution that does a preorder traversal of the tree and visits each node once.

function serialize(root) {
    let arr = []

    //The preorder traversal to collect nodes
    function dfs(node) {
        if (node == null) {
            arr.push(node)
            return
        }
        arr.push(node.val)
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)

    return arr
}

function deserialize(data) {
    let root = data.shift()
    if (root == null) {
        return null
    }
    
    //Build the tree recursively via left THEN right since we did a preorder traversal
    let node = new TreeNode(root)
    node.left = deserialize(data)
    node.right = deserialize(data)
    
    return node
}
