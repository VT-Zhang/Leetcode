function insertionSort(arr) {
    var temp;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
        console.log(arr);
    }
    return arr;
}

console.log(insertionSort([3, 5, 2, 4, 6, 1.5, 2.3]));
