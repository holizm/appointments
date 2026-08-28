[
    { $match: { sentDate: { $exists: false } } },
    { $count: 'count' },
]
