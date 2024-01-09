class DoublyNode {
    constructor(val) {
      this.val = val;
      this.next = null;
      this.prev = null;
    }
  }
  
  class DoublyLinkedList {
    constructor(vals = []) {
      this.head = null;
      this.tail = null;
      this.length = 0;
  
      for (let val of vals) this.push(val);
    }
  
    push(val) {
      const newNode = new DoublyNode(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.length++;
    }
  
    unshift(val) {
      const newNode = new DoublyNode(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
      this.length++;
    }
  
    pop() {
      if (!this.head) {
        throw new Error("The list is empty.");
      }
      const val = this.tail.val;
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      this.length--;
      return val;
    }
  
    shift() {
      if (!this.head) {
        throw new Error("The list is empty.");
      }
      const val = this.head.val;
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      this.length--;
      return val;
    }
  
    // Implement the rest of the methods (getAt, setAt, insertAt, removeAt, average) with the same logic, but account for the prev pointers.
  }
  