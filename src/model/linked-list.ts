import LinkedListNode from "./../model/linked-list-node";
import * as utils from "./utils";

interface List<T> {
  head: LinkedListNode<T>;
  tail: LinkedListNode<T>;
  size: number;
}

class LinkedList<T> implements Iterable<T> {
  private equalsF: utils.EqualsFunction<T> = utils.defaultEquals;
  private list: List<T> | undefined;
  constructor() {
    this.list = undefined;
  }
  size(): number {
    if (this.list) return this.list.size;
    return 0;
  }
  isEmpty(): boolean {
    return !this.list;
  }
  /**************  Insertion  ****************/
  addFront(val: T): boolean {
    const newNode = new LinkedListNode(val);

    if (this.list) {
      this.list.head.prev = newNode;
      newNode.next = this.list.head;

      this.list.head = newNode;
      this.list.size += 1;
    } else {
      this.list = {
        head: newNode,
        tail: newNode,
        size: 1,
      };
    }

    return true;
  }
  addBack(val: T): boolean {
    const newNode = new LinkedListNode(val);

    if (this.list) {
      this.list.tail.next = newNode;
      newNode.prev = this.list.tail;

      this.list.tail = newNode;
      this.list.size += 1;
    } else {
      this.list = {
        head: newNode,
        tail: newNode,
        size: 1,
      };
    }

    return true;
  }
  addAt(i: number, val: T): boolean {
    if (i < 0) {
      return this.addFront(val);
    }

    if (i >= this.size()) {
      return this.addBack(val);
    }
    if (i < 0 || i >= this.size() || !this.list) return false;

    let cur = this.list.head;
    for (let j = 0; j < i - 1; j++) {
        cur = cur.next!; // eslint-disable-line
    }

    const newNode = new LinkedListNode(val);

      cur.next!.prev = newNode; // eslint-disable-line
    newNode.next = cur.next;

    newNode.prev = cur;
    cur.next = newNode;

    this.list.size += 1;

    return true;
  }
  /**************  Serching  ****************/
  indexOf(value: T): number {
    if (!this.list) {
      return -1;
    }

    let i = 0;
    let cur = this.list.head;

    while (!this.equalsF(cur.val, value)) {
      if (!cur.next) {
        return -1;
      }
      cur = cur.next;
      i += 1;
    }

    return i;
  }
  contains(value: T): boolean {
    const index = this.indexOf(value);

    return index !== -1;
  }
  /**************  DEletion  ****************/
  removeFront(): T {
    if (!this.list) {
      throw new Error(utils.EMPTY_ERROR);
    }
    const val = this.list.head.val;

    if (this.list.head.next) {
      this.list.head.next.prev = null;
      this.list.head = this.list.head.next;
      this.list.size -= 1;
    } else {
      this.list = undefined;
    }
    return val;
  }
  removeBack(): T {
    if (!this.list) {
      throw new Error(utils.EMPTY_ERROR);
    }
    const val = this.list.tail.val;

    if (this.list.tail.prev) {
      this.list.tail.prev.next = null;
      this.list.tail = this.list.tail.prev;
      this.list.size -= 1;
    } else {
      this.list = undefined;
    }
    return val;
  }
  removeAt(i: number): T | null {
    if (!this.list) {
      return null;
    }

    if (i === 0) {
      return this.removeFront();
    } else if (i === this.size() - 1) {
      return this.removeBack();
    }

    if (i < 0 || i >= this.list.size) return null;

    let j = 0;
    let cur = this.list.head;

    while (j < i) {
      cur = cur.next!// eslint-disable-line
      j += 1;
    }

    cur.prev!.next = cur.next // eslint-disable-line
    cur.next!.prev = cur.prev // eslint-disable-line

    this.list.size -= 1;

    return cur.val;
  }

  clear(): void {
    this.list = undefined;
  }

  *[Symbol.iterator](): Iterator<T> {
    if (!this.list) return;

    let cur: LinkedListNode<T> | null;

    for (cur = this.list.head; cur != null; cur = cur.next) {
      yield cur.val;
    }
  }
}

export default LinkedList;
