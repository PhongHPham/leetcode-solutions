/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  // check that node is not tail 
  if (node.next !== null) {
    // remove the node by setting its value to the value of the next node
    node.val = node.next.val;
    // and set its next to point to the next node
    node.next = node.next.next;
  }
};
