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

    removeAt(index) {
        console.log('inside remove at, index = ', index);
        if (this.isEmpty()) {
            return undefined;
        }
        if (this.size() === 1) {
            this.head = null;
            this.count = 0;
        } else if (index + 1 > this.size()) {
            return undefined;
        } else {
            let currentNode = this.head;
            let counter = 0;
            let prevNode = null;
            while (currentNode != null) {
                console.log({ counter });
                if (counter === index) {
                    const deletedNode = currentNode;
                    prevNode.next = currentNode.next;
                    this.count--;
                    return deletedNode;
                }
                prevNode = currentNode;
                currentNode = currentNode.next;
                counter++;
            }
        }
    }

    indexOf(element) {

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
        console.log(this);
    }

}

const linkedList = new LinkedList();

linkedList.push(2);
linkedList.push(4);
linkedList.push(1);
linkedList.printThis();
const removedAt1 = linkedList.removeAt(1);
console.log({ removed: removedAt1 });
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