// Given an integer (signed 32 bits), write a function to check whether it is a power of 4.
//
// Example:
// Given num = 16, return true. Given num = 5, return false.
//
// Follow up: Could you solve it without loops/recursion?

var isPowerOfFour = function(num) {
    if(num===0){
        console.log(false);
        return false;
    }
    while(num % 4 === 0){
        num /= 4;
    }
    if(num === 1){
        console.log(true);
        return true;
    }
    else{
        console.log(false);
        return false;
    }
};

isPowerOfFour(4);
isPowerOfFour(0);
isPowerOfFour(16);
isPowerOfFour(3);
isPowerOfFour(-4);
isPowerOfFour(12);
isPowerOfFour(24);
isPowerOfFour(64);
isPowerOfFour(256);
