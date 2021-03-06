// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//
// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
// 
// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

var moveZeroes = function(nums) {
    var length = nums.length;
    var counter = 0;
    for(var i=0; i<length; i++){
        if(nums[i]===0){
            nums.push(0);
            counter++;
        }
    }
    console.log(nums);
    for(var j=0; j<length; j++){
        if(nums[j]===0 && counter != 0){
            nums.splice(j,1);
            counter--
            length--
            j--;
        }
    }
    console.log(nums);
};

moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([0, 0]);
