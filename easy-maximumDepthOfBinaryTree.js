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


var maxDepth = function(root) {
  // need a counter for number of nodes
  // var counter = 0;
  // if (root === []) {
  //   return 0;
  // }

  // if (!root.left && !root.right) {
  //   return 1;
  // }

  //  return counter += (maxDepth(root.left) > maxDepth(root.right) ? maxDepth(root.left) : maxDepth(root.right)) + 1;

  if(root === undefined || root===null){
    return 0;
  }
  var left = maxDepth(root.left) + 1;
  var right = maxDepth(root.right) + 1;
  
  return left > right ? left : right;
};
