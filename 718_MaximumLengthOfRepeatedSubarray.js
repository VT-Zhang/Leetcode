// Given two integer arrays A and B, return the maximum length of an subarray that appears in both arrays.
//
//     Example 1:
// Input:
//     A: [1,2,3,2,1]
// B: [3,2,1,4,7]
// Output: 3
// Explanation:
//     The repeated subarray with maximum length is [3, 2, 1].
//     Note:
// 1 <= len(A), len(B) <= 1000
// 0 <= A[i], B[i] < 100

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    var mapA = {};
    var mapB = {};
    for(var i = 0; i < A.length; i++) {
        var arr = [];
        for(var j = i; j < A.length; j++) {
            arr.push(A[j]);
            if(mapA[arr]) {
                mapA[arr]++;
            }
            else{
                mapA[arr] = 1;
            }
        }
    }
    console.log(mapA);
    for(var m = 0; m < B.length; m++) {
        var array = [];
        for(var n = m; n < B.length; n++) {
            array.push(B[n]);
            if(mapB[array]) {
                mapB[array]++;
            }
            else{
                mapB[array] = 1;
            }
        }
    }
    console.log(mapB);
    var res = [];
    for(var key in mapA) {
        if(key in mapB){
            res.push(key);
        }
    }
    console.log(res);
    var max = 0;
    for(var x = 0; x < res.length; x++) {
        length = 1;
        var flag = false;
        for(var y = 0; y < res[x].length; y++) {
            if(flag && res[x][y] != ","){
                length++;
            }
            if(res[x][y] == ",") {
                flag = true;
            }
            else {
                flag = false;
            }
        }
        console.log(length);
        max = Math.max(max, length);
    }
    return max;
};

console.log(findLength([1,2,3,2,1], [3,2,1,4,7]));
console.log(findLength([5,14,53,80,48], [50,47,3,80,83]));