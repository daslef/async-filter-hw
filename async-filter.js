async function filter(array, fn, cb) {
    const filteredArray = new Homework.AsyncArray([]);
    const length = await getLength(array);

    let ix = 0;
    while (await compareLess(ix, length)) {
        const cur = await getCurrentElement(array, ix)
        if (fn(cur, ix, array)) {
            await pushElement(filteredArray, cur);
        }
        ix = await addNumber(ix, 1);
    }
    cb(filteredArray)
}

const getLength = (array) => {
    return new Promise((resolve) => array.length((value) => resolve(value)))
}

const compareLess = (a, b) => {
    return new Promise((resolve) => Homework.less(a, b, resolve))
}

const addNumber = (a, b) => {
    return new Promise((resolve) => Homework.add(a, b, resolve))
}

const getCurrentElement = (array, ix) => {
    return new Promise((resolve) => array.get(ix, resolve))
}

const pushElement = (array, element) => {
    return new Promise((resolve) => array.push(element, resolve))
}