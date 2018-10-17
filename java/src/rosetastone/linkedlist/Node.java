package rosetastone.linkedlist;

public class Node {

    public int value;
    public Node next;

    public Node(int value, Node next) {
        this.value = value;
        this.next = next;
    }

    protected void setNext(Node n) {
        this.next = n;
    }

    protected Node getNext() {
        return this.next;
    }

    protected int getValue() {
        return this.value;
    }
}
