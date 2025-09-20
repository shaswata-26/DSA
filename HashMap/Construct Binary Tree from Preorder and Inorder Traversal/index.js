// Problem Statement

// Given two integer arrays:

// preorder → preorder traversal of a binary tree

// inorder → inorder traversal of the same tree

// Construct and return the binary tree.

// Constraints:

// preorder.length == inorder.length

// 1 <= preorder.length <= 3000

// preorder and inorder consist of unique values.

// It is guaranteed that the input is valid.

// Example
// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]

// Output: 
//     3
//    / \
//   9  20
//      / \
//     15  7

// ✅ Approach

// The first element in preorder is the root.

// Find the root in inorder array → elements to the left are in the left subtree, right are in the right subtree.

// Recursively construct left and right subtrees.

// Use a hash map for inorder indices to optimize search.

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function buildTree(preorder, inorder) {
    const inMap = new Map();
    inorder.forEach((val, idx) => inMap.set(val, idx));

    function helper(preStart, preEnd, inStart, inEnd) {
        if (preStart > preEnd || inStart > inEnd) return null;

        const rootVal = preorder[preStart];
        const root = new TreeNode(rootVal);

        const inRoot = inMap.get(rootVal);
        const numsLeft = inRoot - inStart;

        root.left = helper(preStart + 1, preStart + numsLeft, inStart, inRoot - 1);
        root.right = helper(preStart + numsLeft + 1, preEnd, inRoot + 1, inEnd);

        return root;
    }

    return helper(0, preorder.length - 1, 0, inorder.length - 1);
}

// Example usage
const preorder = [3,9,20,15,7];
const inorder = [9,3,15,20,7];
const root = buildTree(preorder, inorder);
console.log(root);


// Complexity

// Time: O(n) → each node is processed once

// Space: O(n) → recursion stack + hashmap