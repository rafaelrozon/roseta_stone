const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    addToHead(value) {
        if (!this.head) {
            const node = new Node(value);
            this.head = node;
        } else {
            const node = new Node(value);
            node.next = this.head;
            this.head = node;
        }
        this.length += 1;
    }

    addToTail(value) {
        if (!this.head) {
            this.head = new Node(value);
        } else {
            let curr = this.head;

            while (typeof curr.next !== 'undefined') {
                curr = curr.next;
            }

            curr.next = new Node(value);
        }

        this.length += 1;
    }

    findByValue(value) {
        let temp = this.head;

        while (temp) {
            if (temp.value === value) {
                break;
            }

            temp = temp.next;
        }

        return temp;
    }

    deleteByValue(value) {
        if (!this.head || !this.head.next) {
            throw new Error(`List is empty. No value to delete: ${value}`);
        }

        let t1 = this.head;
        let t2 = this.head.next;
        let deletedNode;

        while (t2.value !== value && t2.next) {
            t1 = t1.next;
            t2 = t2.next;
        }

        deletedNode = t2;

        // remove the node by making the previous node next point to the node
        // after the one with the match value
        t1.next = t2.next;

        this.length -= 1;

        // remove any reference
        t2 = null;

        return deletedNode;
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

    deleteHead() {
        if (!this.head) {
            throw new Error('List is empty');
        }

        const node = this.head;

        // if there is more than one node
        // make the next one the head
        if (this.head.next) {
            this.head = this.head.next;
        } else {
            // otherwise the list is empty after the delete
            this.head = null;
        }

        return node;
    }

    getLength() {
        return this.length;
    }

    getHead() {
        return this.head;
    }
}

module.exports = LinkedList;
