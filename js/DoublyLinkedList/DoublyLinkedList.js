const Node = require('./Node');

class DoublyLinkedList {
    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    addToHead(val) {
        const node = new Node(val);

        // if list is empty
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            // make the node point to the first one in the list
            node.next = this.head;
            // make the first item in the list point back to the new node
            this.head.prev = node;
            // promote the current node to be the head
            this.head = node;
        }

        this.length += 1;

        return this.head;
    }

    addToTail(val) {
        const newNode = new Node(val);

        // if list is empty
        if (!this.tail) {
            this.tail = newNode;
            this.head = newNode;
        } else {
            // make the tail point to the new node
            this.tail.next = newNode;
            // the new node point back to the last item in the list
            newNode.prev = this.tail;
            // promote new node to be the tail
            this.tail = newNode;
        }

        this.length += 1;

        return this.tail;
    }

    addBeforeNode(targetNodeValue, valueToInsert) {
        const newNode = new Node(valueToInsert);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let current = this.head;

            while (current.next !== null && current.getValue() !== targetNodeValue) {
                current = current.next;
            }

            if (current === this.head) {
                this.addToHead(valueToInsert);
            } else if (current === this.tail) {
                this.addToTail(valueToInsert);
            } else {
                // make the new node point back to the node before the current one
                newNode.prev = current.prev;
                // make the new node point foward to the current node
                newNode.next = current;
                // make the current node point back to the new node
                current.prev = newNode;
                // make the node before current point forward to the new node
                newNode.prev.next = newNode;
            }
        }

        this.length += 1;
    }

    addAfterNode(targetNodeValue, valueToInsert) {
        const newNode = new Node(valueToInsert);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length += 1;
        } else {
            let current = this.head;

            while (current.next !== null && current.getValue() !== targetNodeValue) {
                current = current.next;
            }

            if (current === this.head) {
                this.addToHead(valueToInsert);
            } else if (current === this.tail) {
                this.addToTail(valueToInsert);
            } else {
                // make the new node point back to the current one
                newNode.prev = current;
                // make the new node point forward to the node after the current one
                newNode.next = current.next;
                // make the node after current point back to the new node
                current.next.prev = newNode;
                // make the current node point forward to the new node
                current.next = newNode;

                this.length += 1;
            }
        }
    }

    deleteNode(targetNodeValue) {
        if (!this.head) {
            throw new Error(`List is empty. No node to delete: ${targetNodeValue}`);
        } else {
            let current = this.head;
            while (current.next !== null && current.getValue() !== targetNodeValue) {
                current = current.next;
            }

            if (current === this.head) {
                // move the head one potision ahead
                this.head = current.next;
                this.head.prev = null;
            } else if (current === this.tail) {
                // move tail one position backward
                this.tail = current.prev;
                this.tail.next = null;
            } else {
                // make the previous node point to one node after the current
                current.prev.next = current.next;
                // make the node after the current one point back to the new before the current
                current.next.prev = current.prev;
            }
        }

        this.length -= 1;
    }

    getLength() {
        return this.length;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    printList() {
        let temp = this.head;

        const arr = [];

        while (temp) {
            arr.push(temp.value);
            temp = temp.next;
        }

        console.log(arr.toString());

        return arr;
    }
}

module.exports = DoublyLinkedList;
