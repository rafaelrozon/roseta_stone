package com.rafaelrozon.lists;

public class Node {

    public int value;
    public Node next;

    public Node(int value, Node next) {
        this.value = value;
        this.next = next;
    }

    public void setNext(Node n) {
        this.next = n;
    }

    public Node getNext() {
        return this.next;
    }

    public int getValue() {
        return this.value;
    }
}
