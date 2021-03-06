// https://www.hackerrank.com/challenges/sock-merchant/problem
//
//     John works at a clothing store. He has a large pile of socks that he must pair them by color for sale.
//
//                                                                                                          You will be given an array of integers representing the color of each sock. Determine how many pairs of socks with matching colors there are.
//
//     John works at a clothing store and he's going through a pile of socks to find the number of matching pairs. More specifically, he has a pile of  loose socks where each sock  is labeled with an integer, , denoting its color. He wants to sell as many socks as possible, but his customers will only buy them in matching pairs. Two socks,  and , are a single matching pair if they have the same color ().
//
// Given  and the color of each sock, how many pairs of socks can John sell?
//
//     Input Format
//
// The first line contains an integer , the number of socks.
//     The second line contains  space-separated integers describing the colors  of the socks in the pile.
//
//     Constraints
//
// where
// Output Format
//
// Print the total number of matching pairs of socks that John can sell.
//
//     Sample Input
//
// 9
// 10 20 20 10 10 30 50 10 20
// Sample Output
//
// 3
// Explanation
//
// sock.png
//
// John can match three pairs of socks.

function sockMerchant(n, ar) {
    let map = {};
    let res = 0;
    for (let i = 0; i < n; i++) {
        if (map[ar[i]]) {
            map[ar[i]]++;
        } else {
            map[ar[i]] = 1;
        }
    }
    for (let key in map) {
        if(map.hasOwnProperty(key)) {
            res += Math.floor(map[key] / 2);
        }
    }
    return res;
}

console.log(sockMerchant(9, [10,20,20,10,10,30,50,10,20]));