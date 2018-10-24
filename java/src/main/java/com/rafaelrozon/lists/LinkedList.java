package com.rafaelrozon.lists;

public class LinkedList {

    private Node head;
    private int size = 0;

    public void addToHead(int value) {

        if (this.head == null) {
            this.head = new Node(value, null);
        } else {
            this.head = new Node(value, this.head);
        }

        this.increaseSize();
    }

    public void addToTail(int value) {

        if (this.head == null) {
            this.head = new Node(value, null);
        } else {
            Node current = this.head;

            while (current.getNext() != null) {
                current = current.getNext();
            }

            Node n = new Node(value, null);
            current.setNext(n);
        }

        this.increaseSize();
    }

    public Node findByValue(int value) {
        Node current = this.head;

        while(current.getValue() != value) {
            current = current.getNext();
        }

        if (current == this.head && current.getValue() != value) {
            return null;
        }

        return current;
    }

    public Node deleteByValue(int value) throws Exception {
        if (this.size() == 0) {
            throw new Exception("List is Empty");
        }

        Node t1 = this.head;
        Node t2 = this.head.next;
        Node deletedNode;

        while (t2.value != value && t2.next != null) {
            t1 = t1.next;
            t2 = t2.next;
        }

        deletedNode = t2;

        t1.next = t2.next;
        this.decreaseSize();

        t2 = null;

        return deletedNode;
    }

    public Node deleteHead() throws Exception {
        if (this.size == 0) {
            throw new Exception("List is empty. No head to delete.");
        }

        Node n = this.head;

        if (this.head.next != null) {
            this.head = this.head.next;
        } else {
            this.head = null;
        }

        return n;
    }

    public Node getHead() {
        return this.head;
    }

    public Node getTail() {
        Node current = this.head;

        while (current.getNext() != null) {
            current = current.getNext();
        }

        return current;
    }

    public int size() {
        return this.size;
    }

    private void increaseSize() {
        this.size += 1;
    }

    private void decreaseSize() {
        this.size -= 1;
    }

}
