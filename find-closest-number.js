const array = [345, 123, 76, 2572, 34, -346, 177, 23, -15466, 45, 46, 72, -2547, 245, 13, 98, 876, 567];

const number = 4000;

/**
 * Finds the closest number from an array
 * of numbers, relative to the input number
 * 
 * @param {Number} num 
 * @param {Array} arr 
 * 
 * @returns Number
 */
const findClosestNumber = (num, arr) => {
    let found = false;
    let closestNumber = null;
    const startingIndex = Math.floor(arr.length / 2);
    let currentIndex = startingIndex;

    arr.sort((a, b) => a - b);

    while(!found) {
        if (arr.length === 2) {
            if (Math.abs(num - arr[0]) < Math.abs(num - arr[1])) {
                found = true;
                closestNumber = arr[0];
                break;
            }
            found = true;
            closestNumber = arr[1];
            break;
        }

        if (Math.abs(num - arr[currentIndex + 1]) < Math.abs(num - arr[currentIndex - 1])) {
            // keep right side

            arr = arr.filter((v, i) => (
                i >= currentIndex
            ))
            currentIndex = Math.floor(arr.length / 2);

            continue;
        }

        if (Math.abs(num - arr[currentIndex - 1]) < Math.abs(num - arr[currentIndex + 1])) {
            // keep left side

            arr = arr.filter((v, i) => (
                i <= currentIndex
            ))
            currentIndex = Math.floor(arr.length / 2);

            continue;
        }
    }
    return closestNumber;
}

findClosestNumber(number, array);