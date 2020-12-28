import random


class WordFinder:
    """Machine for finding random words from dictionary.

    >>> instance = WordFinder("txt_example.txt")
    5 words read

    >>> instance.random() in ["one", "two", "three", "four", "five"]
    True

    >>> instance.random() in ["one", "two", "three", "four", "five"]
    True

    >>> instance.random() in ["one", "two", "three", "four", "five"]
    True
    """
    def __init__(self, path):
        dict_file = open(path)
        self.words = self.parse(dict_file)
        print(f"{len(self.words)} words read")

    def parse(self, dict_file):
        new_list = [
            word.strip()
            for word in dict_file
        ]
        return new_list

    def random(self):
        return random.choice(self.words)


class SpecialWordFinder(WordFinder):
    """Specialized WordFinder that excludes blank lines/comments.

    >>> instance = SpecialWordFinder("txt_example_2.txt")
    3 words read

    >>> instance.random() in ["one", "two", "three", "four", "five"]
    True

    >>> instance.random() in ["one", "two", "three", "four", "five"]
    True

    >>> instance.random() in ["one", "two", "three", "four", "five"]
    True
    """
    def parse(self, dict_file):
        return [
            w.strip()
            for w in dict_file
            if w.strip() and not w.startswith("#")
        ]
