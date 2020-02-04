// A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

// Return a deep copy of the list.

// The Linked List is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) where random pointer points to, or null if it does not point to any node.

function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

const copyRandomList = function(head) {
  if (!head) return null;

  let currentNode = head;

  let map = new Map();

  // Iterate over old list to create a hashmap
  while (currentNode !== null) {
    map.set(
      currentNode,
      new Node(currentNode.val, currentNode.next, currentNode.random)
    );
    currentNode = currentNode.next;
  }

  for (let newNode of map.values()) {
    if (newNode.next !== null) newNode.next = map.get(newNode.next);
    if (newNode.random !== null) newNode.random = map.get(newNode.random);
  }
  let newHead = map.get(head); // we will return head of new list
  return newHead;
};
