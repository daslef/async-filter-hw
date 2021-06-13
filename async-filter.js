const {
    AsyncArray,
    add,
    subtract,
    multiply,
    divide,
    mod,
    less,
    equal,
    lessOrEqual,
    sqrt
} = Homework;


async function filter(array, fn, cb) {
    const filteredArray = new AsyncArray([]);
    const length = await getLength(array);

    let ix = 0;
    while (await compareLess(ix, length)) {
        const cur = await getCurrentElement(array, ix)
        if (fn(cur, ix, array)) {
            await pushElement(filteredArray, cur);
        }
        ix = await addnumber(ix, 1);
    }
    cb(filteredArray)
}

const getLength = (array) => {
    return new Promise((resolve) => array.length((value) => resolve(value)))
}

const compareLess = (a, b) => {
    return new Promise((resolve) => less(a, b, resolve))
}

const addnumber = (a, b) => {
    return new Promise((resolve) => add(a, b, resolve))
}

const getCurrentElement = (array, ix) => {
    return new Promise((resolve) => array.get(ix, resolve))
}

const pushElement = (array, element) => {
    return new Promise((resolve) => array.push(element, resolve))
}