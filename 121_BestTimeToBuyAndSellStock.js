// Say you have an array for which the ith element is the price of a given stock
// on day i.
//
// If you were only permitted to complete at most one transaction (ie, buy one and
//     sell one share of the stock), design an algorithm to find the maximum profit.
//
// Example 1:
// Input: [7, 1, 5, 3, 6, 4]
// Output: 5
//
// max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger
//     than buying price)
// Example 2:
// Input: [7, 6, 4, 3, 1]
// Output: 0
//
// In this case, no transaction is done, i.e. max profit = 0.

var maxProfit = function(prices) {
    var max = 0;
    var diff = 0;
    var min = Infinity;

    for(var i=0; i<prices.length; i++){
        if(min > prices[i]){
            min = prices[i];
        }
        diff = prices[i] - min;
        if(max < diff){
            max = diff;
        }
    }

    console.log(max);
    return max;

    // var max = 0;
    // for(var i=prices.length-1; i>=0; i--){
    //     for(var j=prices.length-1; j>=0; j--){
    //         if(max < prices[j]-prices[i] && j > i){
    //             max = prices[j]-prices[i];
    //         }
    //     }
    // }
    // if(max<=0){
    //     console.log(0);
    //     return max;
    // }
    // else{
    //     console.log(max);
    //     return max;
    // }
};

maxProfit([7,1,5,3,6,4]);
maxProfit([7,6,4,3,1]);