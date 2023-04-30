import { defaultEquals } from './util.js';
import { Node } from './linked-list-models.js';

export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    push(element) {
        const node = new Node(element);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let currentNode = this.head;
            while (currentNode.next != null) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        this.count++;
    }

    insert(element, position) {

    }

    getElementAt(index) {
        if (this.isEmpty()) return undefined;
        if ((index + 1) > this.size()) {
            return undefined;
        }
        let counter = 1;
        let currentNode = this.head;
        while (currentNode != null) {
            if (counter === index + 1) return currentNode;
            currentNode = currentNode.next;
            counter++;
        }

    }

    remove(element) {

    }

    indexOf(element) {

    }

    removeAt(position) {

    }

    isEmpty() {
        return this.count === 0;
    }

    size() {
        return this.count;
    }

    toString() {

    }

    printThis() {
        console.log(this.head);
        console.log(this);
    }

}

const linkedList = new LinkedList();

linkedList.push(2);
linkedList.push(4);
linkedList.push(1);
linkedList.printThis();
const currentItemIndex1 = linkedList.getElementAt(1);
const currentItemIndex2 = linkedList.getElementAt(2);
const currentItemIndex0 = linkedList.getElementAt(0);
const currentItemIndex4 = linkedList.getElementAt(4);
console.log({ currentItemIndex1 });
console.log({ currentItemIndex2 });
console.log({ currentItemIndex0 });
console.log({ currentItemIndex4 });

class LinkedList2 {
    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    push(element) {
        const node = new Node(element);
        if (this.head == null) {
            this.head = node;
        } else {
            let currentNode = this.head;
            while (currentNode.next != null) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        this.count++;
    }

    insert(element, position) {

    }

    getElementAt(index) {

    }

    remove(element) {

    }

    indexOf(element) {

    }

    removeAt(position) {

    }

    isEmpty() {
        return this.count === 0;
    }

    size() {
        return this.count;
    }

    toString() {

    }

    printThis() {
        console.log(this.head);
        console.log(this);
    }

}