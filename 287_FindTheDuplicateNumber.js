// Given an array nums containing n + 1 integers where each integer 
// is between 1 and n (inclusive), prove that at least one duplicate 
// number must exist. Assume that there is only one duplicate number, 
// find the duplicate one.

// Note:
// You must not modify the array (assume the array is read only).
// You must use only constant, O(1) extra space.
// Your runtime complexity should be less than O(n2).
// There is only one duplicate number in the array, but it could be 
// repeated more than once.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var dict = {};
    for(var i=0; i<nums.length; i++){
        if(!dict[nums[i]]){
            dict[nums[i]] = 1;
        }
        else dict[nums[i]]++;
    }
    console.log(dict);
    for(var key in dict){
        if(dict[key] > 1){
            console.log(key);
            return parseInt(key);
        }
    }
};

findDuplicate([1,2,3,4,4,5,6]);
findDuplicate([1,2,3,4,5,6,7,8,8,9]);