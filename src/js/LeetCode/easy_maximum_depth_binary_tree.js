// https://github.com/azl397985856/leetcode/blob/master/problems/104.maximum-depth-of-binary-tree.md
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
export const maxDepth = function(root) {
  if (!root) return 0;

  if (!root.left && !root.right) return 1;

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
