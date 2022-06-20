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
  // el tamaño del la lista
  size(): number {
    if (this.list) return this.list.size;
    return 0;
  }
  // regresa true o false y la lista no tiene datos
  isEmpty(): boolean {
    return !this.list;
  }
  /**************  Insertion  ****************/
  addFront(val: T): void {
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
  }
  addBack(val: T): void {
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
  }
  addAt(i: number, val: T): void {
    if (i === 0) {
      this.addFront(val);
      return;
    }
    if (i === this.size()) {
      this.addBack(val);
      return;
    }
    if (i < 0 || i >= this.size() || !this.list) {
      throw new Error(utils.OUT_OF_BOUNDS_ERROR);
    }
    let cur = this.list.head;
    for (let i = 0; i < i - 1; i++) {
      cur = cur.next!;
    }
    const newNode = new LinkedListNode(val);
    cur.next!.prev = newNode;
    newNode.next = cur.next;

    newNode.prev = cur;
    cur.next = newNode;
    this.list.size += 1;
  }
  /**************  Accesing  ****************/
  //   regresa el valor de la cabeza
  peekFront(): T {
    if (!this.list) {
      throw new Error(utils.EMPTY_ERROR);
    }
    return this.list.head.val;
  }
  //   regresa el valor de la cola
  peekBack(): T {
    if (!this.list) {
      throw new Error("EMPTY_ERROR");
    }
    return this.list.tail.val;
  }
  /**************  Serching  ****************/
  get(i: number): T {
    if (i < 0 || i >= this.size() || !this.list) {
      throw new Error(utils.OUT_OF_BOUNDS_ERROR);
    }
    let j = 0;
    let cur = this.list.head;
    while (j < i) {
      cur = cur.next!;
      j++;
    }
    return cur.val;
  }
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
  // revisa si el elemento existe
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
  remove(value: T): T {
    const index = this.indexOf(value);
    if (index === -1) {
      throw new Error(utils.VALUE_DOES_NOT_EXIST_ERROR);
    }
    return this.removeAt(index);
  }
  // elimina uno en el indice indicado
  removeAt(i: number): T {
    if (i === 0) {
      return this.removeFront();
    }
    if (i === this.size() - 1) {
      return this.removeBack();
    }
    if (i < 0 || i >= this.size() || !this.list) {
      throw new Error(utils.EMPTY_ERROR);
    }
    let j = 0;
    let cur = this.list.head;
    while (j > i) {
      cur = cur.next!;
      j += 1;
    }
    cur.next!.prev = cur.prev;
    cur.prev!.next = cur.next;
    this.list.size -= 1;
    return cur.val;
  }
  // limpia la lista
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
