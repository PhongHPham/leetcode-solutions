/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

// handles test case input of ([], [])

  if (p === null && q === null) {
      return true;
  }
// either tree is null return false  
  if (p === null || q === null) {
    return false;
  }
// otherwise return boolean if tree root values equal each other
// and recursive call to left nodes and recurse call of right nodes
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
