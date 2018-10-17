package rosetastone.linkedlist;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;


public class LinkedListTest {

    @Test
    void addToHeadTest() {
        LinkedList l = new LinkedList();
        l.addToHead(3);
        l.addToHead(4);
        l.addToHead(5);
        assertEquals(5, l.getHead().getValue());
        assertEquals(3, l.size());
    }

    @Test
    void addToTailTest() {
        LinkedList l = new LinkedList();
        l.addToHead(3);
        l.addToHead(4);
        l.addToTail(2);
        assertEquals(2, l.getTail().getValue());
        assertEquals(3, l.size());
    }

    @Test
    void findByValueTest() {
        LinkedList l = new LinkedList();
        l.addToHead(3);
        l.addToHead(4);
        l.addToHead(1);
        l.addToHead(55);
        Node n = l.findByValue(3);
        assertEquals(3, n.getValue());
    }

    @Test
    void deleteByValueTest() {
        try {
            LinkedList l = new LinkedList();
            l.addToHead(3);
            l.addToHead(4);
            l.addToHead(1);
            l.addToHead(55);
            Node n = l.deleteByValue(4);
            assertEquals(4, n.value);
        } catch (Exception e) {
            System.out.println("Got Exception");
        }
    }

    @Test
    void deleteByValueThrowExceptionTest() {
        try {

            LinkedList l = new LinkedList();

            Throwable exception = assertThrows(Exception.class, () -> {
                Node n = l.deleteByValue(4);
            });

            assertEquals("List is empty", exception.getMessage());

        } catch (Exception e) {
            System.out.println("Got Exception");
        }

    }

    @Test
    void deleteHeadTest() {
        try {
            LinkedList l = new LinkedList();
            l.addToHead(3);
            l.addToHead(4);
            l.addToHead(1);
            l.addToHead(55);
            Node head = l.deleteHead();

            assertEquals(55, head.value);
            assertEquals(1, l.getHead().value);

        } catch (Exception e) {
            System.out.println("Got Exception");
        }

    }

    @Test
    void deleteHeadThrowsExceptionTest() {
        try {
            LinkedList l = new LinkedList();

            Throwable exception = assertThrows(Exception.class, () -> {
                Node n = l.deleteHead();
            });

            assertEquals("List is empty. No head to delete.", exception.getMessage());

        } catch (Exception e) {
            System.out.println("Got Exception");
        }

    }

}
