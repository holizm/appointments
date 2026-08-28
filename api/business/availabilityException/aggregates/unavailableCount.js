[
    { $match: { available: false } },
    { $count: 'count' },
]
