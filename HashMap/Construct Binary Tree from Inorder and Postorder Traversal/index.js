// Problem Statement

// Given two integer arrays:

// inorder → inorder traversal of a binary tree

// postorder → postorder traversal of the same tree

// Construct and return the binary tree.

// Constraints:

// inorder.length == postorder.length

// 1 <= inorder.length <= 3000

// inorder and postorder consist of unique values.

// It is guaranteed that the input is valid.

// Example
// Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]

// Output:
//     3
//    / \
//   9  20
//      / \
//     15  7

// ✅ Approach

// The last element in postorder is the root.

// Find the root in inorder array → elements to the left are in the left subtree, right are in the right subtree.

// Recursively construct the left and right subtrees.

// Use a hash map for inorder indices to optimize search.

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function buildTree(inorder, postorder) {
    const inMap = new Map();
    inorder.forEach((val, idx) => inMap.set(val, idx));

    function helper(inStart, inEnd, postStart, postEnd) {
        if (inStart > inEnd || postStart > postEnd) return null;

        const rootVal = postorder[postEnd];
        const root = new TreeNode(rootVal);

        const inRoot = inMap.get(rootVal);
        const numsLeft = inRoot - inStart;

        root.left = helper(inStart, inRoot - 1, postStart, postStart + numsLeft - 1);
        root.right = helper(inRoot + 1, inEnd, postStart + numsLeft, postEnd - 1);

        return root;
    }

    return helper(0, inorder.length - 1, 0, postorder.length - 1);
}

// Example usage
const inorder = [9,3,15,20,7];
const postorder = [9,15,7,20,3];
const root = buildTree(inorder, postorder);
console.log(root);


// Complexity

// Time: O(n) → each node is processed once

// Space: O(n) → recursion stack + hashmap