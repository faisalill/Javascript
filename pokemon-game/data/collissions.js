const collission = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 2057, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 2057, 2057, 2057, 2057, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 2057, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 2057, 2057, 0, 0, 0, 0, 0, 0, 2057, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 2057, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 2057, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 2057, 2057, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 2057, 2057, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 2057, 2057, 0, 0, 0, 0, 0, 0, 2057, 2057, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 2057, 2057, 0, 0, 0, 0, 0, 0, 2057, 2057, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 2057, 2057, 0, 0, 0, 0, 0, 0, 2057, 2057, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 2057, 2057, 0, 0, 0, 0, 0, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 2057, 2057, 2057, 0, 0, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 2057, 0, 0, 2057, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 2057, 2057, 2057, 0, 0, 0, 0, 0, 0, 0, 2057, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 2057, 2057, 2057, 2057, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 2057, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 2057, 2057, 0, 0, 2057, 2057, 2057, 2057, 2057, 0, 0, 0, 0, 0, 0, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 2057, 2057, 2057, 2057, 2057, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 2057, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 2057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]