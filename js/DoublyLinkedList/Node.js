class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }

    getValue() {
        return this.value;
    }

    getNext() {
        return this.next;
    }

    getPrevious() {
        return this.prev;
    }
};

module.exports = Node;
