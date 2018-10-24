const LinkedList = require('./LinkedList');
const Node = require('./Node');

describe('LinkedListX Tests', () => {

    it('prints a linked list', () => {

        const list = new LinkedList();
        list.addToTail(5);
        list.addToTail(9);
        list.addToTail(3);

        const arr = list.printList();

        expect(arr).toEqual([5,9,3]);
    })

    it('adds a node to the head', () => {

        const list = new LinkedList();

        list.addToHead(3);
        list.addToHead(4);
        list.addToHead(5);
        list.addToHead(8.1);

        const head = list.getHead();

        expect(head.value).toBe(8.1);

    });

    it('find a node by value', () => {

        const list = new LinkedList();
        list.addToTail(1);
        list.addToTail(2);
        list.addToTail(3);
        list.addToTail(2.3);
        list.addToTail(5);

        const nodeFound = list.findByValue(2.3);

        expect(nodeFound.value).toEqual(2.3);
    });

    it('removes a node by its value', () => {

        const list = new LinkedList();

        list.addToTail(1);
        list.addToTail(2);
        list.addToTail(3);
        list.addToTail(2.3);
        list.addToTail(5);

        const removedNode = list.deleteByValue(2.3);

        expect(list.getLength()).toBe(4);
        expect(removedNode.value).toBe(2.3);
        expect(list.getHead().value).toBe(1);
    });
});
