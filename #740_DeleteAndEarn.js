// Given an array nums of integers, you can perform operations on the array.
//
//     In each operation, you pick any nums[i] and delete it to earn nums[i] points. After, you must delete every element equal to nums[i] - 1 or nums[i] + 1.
//
// You start with 0 points. Return the maximum number of points you can earn by applying such operations.
//
//     Example 1:
// Input: nums = [3, 4, 2]
// Output: 6
// Explanation:
//     Delete 4 to earn 4 points, consequently 3 is also deleted.
//     Then, delete 2 to earn 2 points. 6 total points are earned.
//     Example 2:
// Input: nums = [2, 2, 3, 3, 3, 4]
// Output: 9
// Explanation:
//     Delete 3 to earn 3 points, deleting both 2's and the 4.
// Then, delete 3 again to earn 3 points, and 3 again to earn 3 points.
// 9 total points are earned.
//     Note:
//
// The length of nums is at most 20000.
// Each element nums[i] is an integer in the range [1, 10000].

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    var dict = {};
    for(var i = 0; i < nums.length; i++) {
        if(dict[nums[i]]) {
            dict[nums[i]]++;
        }
        else {
            dict[nums[i]] = 1;
        }
    }
    console.log(dict);
    var even = 0;
    var odd = 0;
    for(var key in dict) {
        if(parseInt(key) % 2 == 0) {
            even += dict[key] * key;
        }
        if(parseInt(key) % 2 == 1) {
            odd += dict[key] * key;
        }
    }
    console.log(even);
    if(odd > even) {
        return odd;
    }
    else {
        return even;
    }
};

// console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]));
// console.log(deleteAndEarn([3, 4, 2]));
console.log(deleteAndEarn([8,10,4,9,1,3,5,9,4,10]));