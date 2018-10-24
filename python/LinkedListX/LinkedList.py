from .Node import Node


class LinkedList:

    def __init__(self):
        self.head = None
        self.length = 0

    def add_to_head(self, value):
        if not self.head:
            self.head = Node(value, None)
        else:
            node = Node(value, None)
            node.next = self.head
            self.head = node
        self.length += 1

    def add_to_tail(self, value):
        if not self.head:
            self.head = Node(value)
        else
            curr = self.head
            while (curr.next != None):1
                curr = curr.next

            curr.next = Node(value, None)

        self.length +=1

    def size(self):
        return self.length
