/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

    push(val) {
      const newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
    }
  
    unshift(val) {
      const newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
    }
  
    pop() {
      if (!this.head) {
        throw new Error("The list is empty.");
      }
      if (this.head === this.tail) {
        const val = this.head.val;
        this.head = null;
        this.tail = null;
        this.length--;
        return val;
      }
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }
      const val = this.tail.val;
      current.next = null;
      this.tail = current;
      this.length--;
      return val;
    }
  
    shift() {
      if (!this.head) {
        throw new Error("The list is empty.");
      }
      const val = this.head.val;
      this.head = this.head.next;
      this.length--;
      return val;
    }
  
    getAt(idx) {
      if (idx < 0 || idx >= this.length) {
        throw new Error("Invalid index.");
      }
      let current = this.head;
      for (let i = 0; i < idx; i++) {
        current = current.next;
      }
      return current.val;
    }
  
    setAt(idx, val) {
      if (idx < 0 || idx >= this.length) {
        throw new Error("Invalid index.");
      }
      let current = this.head;
      for (let i = 0; i < idx; i++) {
        current = current.next;
      }
      current.val = val;
    }
  
    insertAt(idx, val) {
      if (idx < 0 || idx > this.length) {
        throw new Error("Invalid index.");
      }
      if (idx === 0) {
        this.unshift(val);
      } else if (idx === this.length) {
        this.push(val);
      } else {
        const newNode = new Node(val);
        let current = this.head;
        for (let i = 0; i < idx - 1; i++) {
          current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
      }
    }
  
    removeAt(idx) {
      if (idx < 0 || idx >= this.length) {
        throw new Error("Invalid index.");
      }
      if (idx === 0) {
        return this.shift();
      } else if (idx === this.length - 1) {
        return this.pop();
      } else {
        let current = this.head;
        for (let i = 0; i < idx - 1; i++) {
          current = current.next;
        }
        const val = current.next.val;
        current.next = current.next.next;
        this.length--;
        return val;
      }
    }
  
    average() {
      if (!this.head) {
        return 0;
      }
      let sum = 0;
      let current = this.head;
      while (current) {
        sum += current.val;
        current = current.next;
      }
      return sum / this.length;
    }
  }
  