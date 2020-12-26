def mode(nums):
    """Return most-common number in list.

    For this function, there will always be a single-most-common value;
    you do not need to worry about handling cases where more than one item
    occurs the same number of times.

        >>> mode([1, 2, 1])
        1

        >>> mode([2, 2, 3, 3, 2])
        2
    """
    alredy_counted_numbers_list = []
    times = 0
    last_counted_times = 0
    for number in nums:
        if number not in alredy_counted_numbers_list:
            last_counted_times = times
            times = nums.count(number)
            if last_counted_times < times:
                max_times_number = number
        alredy_counted_numbers_list.append(number)

    return max_times_number

