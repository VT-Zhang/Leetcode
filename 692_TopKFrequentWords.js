// Given a non-empty list of words, return the k most frequent elements.
//
//     Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.
//
//     Example 1:
// Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// Output: ["i", "love"]
// Explanation: "i" and "love" are the two most frequent words.
//     Note that "i" comes before "love" due to a lower alphabetical order.
//     Example 2:
// Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
// Output: ["the", "is", "sunny", "day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
// with the number of occurrence being 4, 3, 2 and 1 respectively.
//     Note:
// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
//     Input words contain only lowercase letters.
//     Follow up:
//     Try to solve it in O(n log k) time and O(n) extra space.

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    words.sort();
    var res = [];
    var dict = {};
    for(var i = 0; i < words.length; i++) {
        if(!dict[words[i]]) {
            dict[words[i]] = 1;
        }
        else {
            dict[words[i]]++;
        }
    }
    console.log(dict);
    for(var j = 0; j < k; j++) {
        var max = Number.NEGATIVE_INFINITY;
        for(var key in dict) {
            if(max < dict[key]) {
                max = dict[key];
            }
        }
        for(var l in dict){
            if(dict[l] == max) {
                res.push(l);
                dict[l] = 0;
                break;
            }
        }
        console.log(dict);
    }
    return res;
};

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"],2));
console.log(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],4));
console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"],3));

