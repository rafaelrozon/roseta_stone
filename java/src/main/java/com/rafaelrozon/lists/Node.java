package com.rafaelrozon.lists;

public class Node {

    /**
     * represents the data that the node holds.
     * For the sake of simplicity, using an int here.
     */
    public int value;

    /**
     * The next node in the list
     */
    public Node next;

    public Node(int value, Node next) {
        this.value = value;
        this.next = next;
    }
}
