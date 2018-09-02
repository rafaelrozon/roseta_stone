const DLL = require('./DoublyLinkedList');

describe('DoublyLinkedList tests', () => {
    it('adds a node to the head in an empty list', () => {
        const list = new DLL();

        list.addToHead(2);

        const head = list.getHead();

        expect(head.getValue()).toBe(2);
        expect(list.getLength()).toBe(1);
    });

    it('adds a node to the tail in an empty list', () => {
        const list = new DLL();

        const tail = list.addToTail(3);
        const head = list.getHead();

        expect(tail.getValue()).toBe(3);
        expect(list.getLength()).toBe(1);
        expect(head.getValue()).toBe(3);
    });

    it('adds a node to the head in an populated list', () => {
        const list = new DLL();

        list.addToHead(1);
        list.addToHead(2);
        list.addToHead(3);

        const tail = list.getTail();
        const head = list.getHead();

        expect(tail.getValue()).toBe(1);
        expect(list.getLength()).toBe(3);
        expect(head.getValue()).toBe(3);
    });

    it('adds a node to the tail in an populated list', () => {
        const list = new DLL();

        list.addToTail(1);
        list.addToTail(2);
        list.addToTail(3);

        const tail = list.getTail();
        const head = list.getHead();

        expect(tail.getValue()).toBe(3);
        expect(list.getLength()).toBe(3);
        expect(head.getValue()).toBe(1);
    });

    it('adds a node before a node in the middle', () => {
        const list = new DLL();
        list.addToHead(1);
        list.addToHead(2);
        list.addToHead(3);

        list.addBeforeNode(2, 4);

        list.printList();

        const head = list.getHead();
        const tail = list.getTail();
        expect(head.getValue()).toBe(3);
        expect(tail.getValue()).toBe(1);
        expect(list.getLength()).toBe(4);
    });

    it('adds a node before the head', () => {
        const list = new DLL();
        list.addToHead(1);
        list.addToHead(2);
        list.addToHead(3);

        list.addBeforeNode(3, 5);

        const arr = list.printList();
        const head = list.getHead();
        const tail = list.getTail();

        expect(head.getValue()).toBe(5);
        expect(tail.getValue()).toBe(1);
        expect(list.getLength()).toBe(5);
        expect(arr).toEqual([5, 3, 2, 1]);
    });

    it('adds a node after a node in the middle', () => {
        const list = new DLL();

        list.addToHead(1);
        list.addToHead(2);
        list.addToHead(3);

        list.addAfterNode(2, 4);

        const arr = list.printList();

        expect(list.getLength()).toBe(4);
        expect(list.getHead().getValue()).toBe(3);
        expect(list.getTail().getValue()).toBe(1);
        expect(arr).toEqual([3, 2, 4, 1]);
    });

    it('adds a node after the head', () => {
        const list = new DLL();

        list.addToHead(1);
        list.addToHead(2);
        list.addToHead(3);

        list.addAfterNode(3, 5);

        const arr = list.printList();

        expect(list.getLength()).toBe(4);
        expect(list.getHead().getValue()).toBe(5);
        expect(list.getTail().getValue()).toBe(1);
        expect(arr).toEqual([5, 3, 2, 1]);
    });

    it('adds a node after the tail', () => {
        const list = new DLL();

        list.addToHead(1);
        list.addToHead(2);
        list.addToHead(3);

        list.addAfterNode(1, 5);

        const arr = list.printList();

        expect(list.getLength()).toBe(4);
        expect(list.getHead().getValue()).toBe(3);
        expect(list.getTail().getValue()).toBe(5);
        expect(arr).toEqual([3, 2, 1, 5]);
    });

    it('deletes a node', () => {
        const list = new DLL();

        list.addToHead(1);
        list.addToHead(2);
        list.addToHead(4);
        list.addToHead(5);
        list.addToHead(3);

        list.printList();

        expect(list.getLength()).toBe(5);

        list.deleteNode(4);

        const arr = list.printList();

        expect(list.getLength()).toBe(4);
        expect(arr).toEqual([3, 5, 2, 1]);
    });

    it('deletes the head', () => {
        const list = new DLL();

        list.addToHead(1);
        list.addToHead(2);
        list.addToHead(4);
        list.addToHead(5);
        list.addToHead(3);

        list.printList();

        expect(list.getLength()).toBe(5);

        list.deleteNode(3);

        const arr = list.printList();

        expect(list.getLength()).toBe(4);
        expect(arr).toEqual([5, 4, 2, 1]);
    });

    it('deletes the tail', () => {
        const list = new DLL();

        list.addToHead(1);
        list.addToHead(2);
        list.addToHead(4);
        list.addToHead(5);
        list.addToHead(3);

        list.printList();

        expect(list.getLength()).toBe(5);

        list.deleteNode(1);

        const arr = list.printList();

        expect(list.getLength()).toBe(4);
        expect(arr).toEqual([3, 5, 4, 2]);
    });
});
