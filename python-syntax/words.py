def print_upper_words(words):
    """Takes a list of words and print each of them in uppercase"""
    for word in words:
        print(word.upper())


list_of_words = ['banana', 'egg', 'apple', 'orange', 'grape', 'emerald']
# print_upper_words(list_of_words)


def print_upper_words_that_starts_with_letter_e(words):
    """Takes a list of words and print those that
    start with letter e in uppercase"""
    for word in words:
        if word[0] == 'e':
            print(word.upper())


# print_upper_words_that_starts_with_letter_e(list_of_words)

def print_upper_words_that_starts_with_specific_letters(
        words, must_start_with
):
    """Takes a list of words and print those that start
    with letter e in uppercase"""
    for word in words:
        if word[0] in must_start_with:
            print(word.upper())


must_start_with = {'g', 'a'}
print_upper_words_that_starts_with_specific_letters(
    list_of_words, must_start_with
)
