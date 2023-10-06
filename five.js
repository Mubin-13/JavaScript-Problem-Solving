function getFirstValue(arr) {
    if (arr.length > 0) {
        return arr[0];
    }
    return undefined;
}

console.log(getFirstValue([1, 2, 3]));
console.log(getFirstValue([80, 5, 100]));
console.log(getFirstValue([-500, 0, 50]));
