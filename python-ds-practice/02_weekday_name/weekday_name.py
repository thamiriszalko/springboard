def weekday_name(day_of_week):
    week_days = {
        '1': 'Sunday',
        '2': 'Monday',
        '3': 'Tuesday',
        '4': 'Wednesday',
        '5': 'Thrusday',
        '6': 'Friday',
        '7': 'Saturday',
    }
    return week_days[str(day_of_week)] if day_of_week in range(1, 8) else None


print(weekday_name(1))
print(weekday_name(7))
print(weekday_name(9))
print(weekday_name(0))
