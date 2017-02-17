function binarySearch(arr, value) {
    var left = 0
    var right = arr.length - 1

    while (left <= right) {
        var middle = left + ((right - left) >> 1)

        if (arr[middle] > value) {
            right = middle - 1
        } else if (arr[middle] < value) {
            left = middle + 1
        } else {
            return middle
        }
    }
    return -1
}

console.log(binarySearch([1,2,3,4,5,6], 4))
