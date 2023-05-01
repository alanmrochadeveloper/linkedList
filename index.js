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
        if (position >= 0 && position < this.size()) {
            const node = new Node(element);
            if (position === 0) {
                let temp = this.head;
                this.head = node;
                this.head.next = temp;
            } else {
                let prev = this.getElementAt(position - 1);
                let current = this.getElementAt(position);
                let temp = current;
                prev.next = node;
                node.next = temp;
            }
            this.count++;
            return true;
        }
        return false;
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

    getElementAtV2(index) {
        if (index >= 0 && index <= this.count) { // {1}
            let node = this.head; // {2}
            for (let i = 0; i < index && node != null; i++) { // {3}
                node = node.next;
            }
            return node; // {4}
        }
        return undefined; // {5}
    }

    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    removeAt(index) {
        if (index >= 0 && index < this.count) { // {1}
            let current = this.head; // {2}
            if (index === 0) { // {3}
                this.head = current.next;
            } else {
                let previous; // {4}
                for (let i = 0; i < index; i++) { // {5}
                    previous = current; // {6}
                    current = current.next; // {7}
                }
                previous.next = current.next; // {8}
            }
            this.count--; // {9}
            return current.element;
        }
        return undefined; // {10}
    }

    indexOf(element) {
        if (this.head == null) return undefined;
        let current = this.head;
        let index = 0;
        while (current != null) {
            if (this.equalsFn(element, current.element)) return index;
            current = current.next;
            index++;
        }
        return -1;
    }

    getHead() {
        return this.head;
    }

    clear() {
        this.head = null;
        this.count = 0;
    }

    isEmpty() {
        return this.count === 0;
    }

    size() {
        return this.count;
    }

    toString() {
        if (this.head == null) {
            return '';
        }
        let objString = `${this.head}`;
        let current = this.head.next;
        for (let i = 1; i < this.size() && current != null; i++) {
            objString = `${objString},${current.element}`;
            current = current.next;
        }
        return objString;
    }

    printThis() {
        console.log(this);
    }

}

const linkedList = new LinkedList();

linkedList.push(2);
linkedList.push(4);
linkedList.push(1);
linkedList.insert(3, 1);
linkedList.printThis();
// const removedAt1 = linkedList.removeAt(1);
// const removedAt0 = linkedList.removeAt(0);
const removedAt0 = linkedList.removeAt(0);
console.log({ removedAt0 });
linkedList.printThis();
const currentItemIndex1 = linkedList.getElementAt(1);
const currentItemIndex2 = linkedList.getElementAt(2);
const currentItemIndex0 = linkedList.getElementAt(0);
const currentItemIndex4 = linkedList.getElementAt(4);
linkedList.printThis();
console.log({ currentItemIndex1 });
console.log({ currentItemIndex2 });
console.log({ currentItemIndex0 });
console.log({ currentItemIndex4 });