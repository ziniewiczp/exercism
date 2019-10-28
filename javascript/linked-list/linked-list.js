class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

export class LinkedList {

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
    if(!this.head) this.tail = null;
    return firstElement.value;
  }

  unshift(value) {
    const newNode = new Node(value, this.head, null);
    if(this.head) this.head.prev = newNode;
    if(!this.tail) this.tail = newNode;
    this.head = newNode;
  }

  delete(value) {
    let current = this.head;
    while(current) {
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
        return;
      }

      current = current.next;
    }
  }

  count() {
    let current = this.head;
    let counter = 0;
    while(current) {
      counter += 1;
      current = current.next;
    }

    return counter;
  }
}
