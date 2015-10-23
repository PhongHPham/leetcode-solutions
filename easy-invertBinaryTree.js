/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  // by inverting the tree, we mean mirroring it
  // think of it as flipping it on its y-axis, the root node
  // stays in place but all the child nodes are swapped
  
  // if is null, return
  // for recursive, when tree doesn't have another node
  if (root === null) {
    return null;
  }  

  // store one side of root
  var temp = root.left;

  // swap by setting a side to recursive call of other side
  root.left = invertTree(root.right);
  // complete swap by setting other side to recursive call to 
  // original side stored in temp
  root.right = invertTree(temp);
  // return the inverted tree
  return root;
};
