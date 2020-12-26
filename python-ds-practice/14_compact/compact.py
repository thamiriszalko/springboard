def compact(lst):
    new_list = []
    for element in lst:
        if element:
            new_list.append(element)

    return new_list


compact([0, 1, 2, '', [], False, (), None, 'All done'])