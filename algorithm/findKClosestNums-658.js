function findClosestElements(arr, k, x) {
    let leftPointer = 0,
        rightPointer = arr.length - k;

    while (leftPointer < rightPointer) {
        let mid = Math.floor((leftPointer + rightPointer) / 2);
        if(x - arr[mid] > arr[mid+k] - x) {
            leftPointer = mid + 1;
        } else {
            rightPointer =  mid;
        }
    }
    return arr.slice(leftPointer, leftPointer + k);
}

console.log('test');
