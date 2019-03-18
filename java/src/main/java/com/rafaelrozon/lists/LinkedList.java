package com.rafaelrozon.lists;

public class LinkedList {

    public Node head;
    private int size = 0;

    /**
     * @return list size
     */
    public int size() {
        return this.size;
    }

    /**
     * increase list size by 1
     */
    private void increaseSize() {
        this.size += 1;
    }

    /**
     * decrease list size by 1
     */
    private void decreaseSize() {
        this.size -= 1;
    }

    /**
     *
     * @return true if list is empty
     */
    public boolean isEmpty() {
        return this.size == 0;
    }

    /**
     * Create a node and make it the head of the list
     * @param value value for the new node
     */
    public void addToHead(int value) {

        if (this.isEmpty()) {
            this.head = new Node(value, null);
        } else {
            this.head = new Node(value, this.head);
        }

        this.increaseSize();
    }

    /**
     * Add a node to the last position in the list
     * @param value a value for the new node
     */
    public void addToTail(int value) {

        // if list is empty, the new node is the head
        if (this.isEmpty()) {
            this.head = new Node(value, null);
        } else {
            Node current = this.head;

            // go to the last node
            while (current.next != null) {
                current = current.next;
            }

            // create a new node to be the last one
            Node newLastNode = new Node(value, null);

            // make the current last node to point to the new node making it the last one
            current.next = newLastNode;
        }

        this.increaseSize();
    }

    /**
     * Find a node by checking its value
     * @param value     value to find
     * @return          Node
     */
    public Node findByValue(int value) {
        Node current = this.head;

        // loop through the list until find the one with the matching value
        while(current.value != value) {
            current = current.next;
        }

        // if there's only one node in the list and its value doesn't match
        if (current == this.head && current.value != value) {
            return null;
        }

        return current;
    }

    /**
     * Find a node by the value it holds and then deletes it.
     * @param value         value of the node to delete
     * @return              deleted node
     * @throws Exception    if list is empty
     */
    public Node deleteByValue(int value) throws Exception {
        if (this.size() == 0) {
            throw new Exception("List is Empty");
        }

        Node temp = this.head;
        Node prev = null;

        // if there's a head and it matches the value
        // delete it by pointing to the next one
        if (temp != null && temp.value == value) {
            this.decreaseSize();
            this.head = this.head.next;
            return temp;
        }

        while (temp != null && temp.value != value) {
            temp = temp.next;
            prev = temp;
        }

        // if the value is not in the list
        if (temp == null) {
            return null;
        }

        // the value is in the list. Delete the node by changing the reference of the next value
        // in the previous node
        prev.next = temp.next;

        this.decreaseSize();

        return temp;
    }

    public Node deleteHead() throws Exception {
        if (this.size == 0) {
            throw new Exception("List is empty. No head to delete.");
        }

        Node n = this.head;

        // if there's more the one node in the list, delete the head by pointing it to the next node
        if (this.head.next != null) {
            this.head = this.head.next;
        } else {
            this.head = null;
        }

        return n;
    }

    /**
     * Get last node in list
     * @return Node
     */
    public Node getTail() {
        Node current = this.head;

        // loop will stop when next is null and this only happens with the last node
        while (current.next != null) {
            current = current.next;
        }

        return current;
    }

}
