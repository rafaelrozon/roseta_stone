const Node = require('./Node');

/**
 *
 */
class LinkedList {
    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    /**
     *
     * @returns {boolean} true if the head is a node
     */
    isEmpty() {
        return typeof this.head !== 'undefined';
    }

    /**
     * Increase size by 1
     */
    increaseSize() {
        this.length += 1;
    }

    /**
     * Decrease size by 1
     */
    decreaseSize() {
        this.length -= 1;
    }

    /**
     * Create a Node and make it the head
     * @param value node value
     */
    addToHead(value) {

        if (this.isEmpty()) {
            this.head = new Node(value);
        } else {
            // create the node first, the current head will be the next value of the node
            // then promote the just created node to be the head
            this.head = new Node(value, this.head);
        }

        this.increaseSize();
    }

    /**
     * Create a node and add it to the end of the list
     * @param value
     */
    addToTail(value) {
        if (this.isEmpty()) {
            this.head = new Node(value);
        } else {
            let curr = this.head;

            // loop will stop at the last node
            while (typeof curr.next !== 'undefined') {
                curr = curr.next;
            }

            curr.next = new Node(value);
        }

        this.increaseSize();
    }

    /**
     * Find a node in the list by checking its value.
     * @param value value to find
     * @returns {Node}
     */
    findByValue(value) {
        let temp = this.head;

        while (temp.value !== value) {
            temp = temp.next;
        }

        if (temp === this.head && temp.value !== value) {
            return;
        }

        return temp;
    }

    /**
     *
     * @param value
     * @returns {*}
     */
    deleteByValue(value) {
        if (this.isEmpty()) {
            throw new Error(`List is empty. No value to delete: ${value}`);
        }

        let temp = this.head;
        let prev;

        // head has the value
        if (temp && temp.value === value) {
            this.decreaseSize();
            this.head = this.head.next;
            return temp;
        }

        // head doesn't have the value, loop through the list
        while(temp && temp.value !== value) {
            temp = temp.next;
            prev = temp;
        }

        // didnt='t find the value in the list
        if (!temp) {
            return;
        }

        // found the value in the list
        prev.next = temp.next;

        this.decreaseSize();

        return temp;

    }

    /**
     * Prints the values in the list as a representation of the list itself
     * @returns {Array}
     */
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

    /**
     *
     * @returns {Node} deleted node reference
     */
    deleteHead() {
        if (this.isEmpty()) {
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

    /**
     *
     * @returns {number} list size
     */
    size() {
        return this.length;
    }

}

module.exports = LinkedList;
