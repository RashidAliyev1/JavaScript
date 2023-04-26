//8. Write a function that takes an array of numbers as input and returns the median of the array 
// (i.e., the middle number when the array is sorted).
function median(numbers) {
    const sorted = Array.from(numbers).sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
}

console.log(median([9, 5,8, 7, 14, 33]));
console.log(median([9, 5,8, 7, 14, 33,42]));