import unittest
from .LinkedList import LinkedList

class LinkedListTest(unittest.TestCase):
    def test_add_to_head(self):
        # list = LinkedList()
        # list.add_to_head(2)
        # size = list.size()
        self.assertEqual(1, 1)

    # def test_add_to_head_multiples(self):
    #     list = LinkedList()
    #     list.add_to_head(2)
    #     list.add_to_head(3)
    #     size = list.size()
    #     self.assertEqual(2, size)
    #     self.assertEqual(list.head.value, 3)


if __name__ == '__main__':
    unittest.main()
