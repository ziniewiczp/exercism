class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const newNode = new Node(value, null, this.tail);
    if(!this.head) this.head = newNode;
    if(this.tail) this.tail.next = newNode;
    this.tail = newNode;
  }

  pop() {
    const lastElement = this.tail;
    this.tail = lastElement.prev;
    if(this.tail) this.tail.next = null;
    if(!this.tail) this.head = null;
    return lastElement.value;
  }

  shift() {
    const firstElement = this.head;
    this.head = firstElement.next;
    if(this.head) this.head.prev = null;
    return firstElement.value;
  }

  unshift(value) {
    const newNode = new Node(value, this.head, null);
    if(this.head) this.head.prev = newNode;
    this.head = newNode;
    if(!this.tail) this.tail = newNode;
  }

  delete(value) {
    let current = this.head;
    while(current !== null) {
      if(current.value === value) {
        if(current.prev) { 
          current.prev.next = current.next;
        
        } else {
          this.head = current.next;
        }

        if(current.next) {
          current.next.prev = current.prev;
        
        } else {
          this.tail = current.prev;
        }
        break;
      }

      current = current.next;
    }
  }

  count() {
    let current = this.head;
    let counter = 0;
    while(current !== null) {
      counter += 1;
      current = current.next;
    }

    return counter;
  }
}
