function longestConsecutive(nums) {
    if (nums.length === 0) return 0;

    nums.sort((a, b) => a - b);
    let maxLen = 1;
    let currentLen = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] + 1) {
            currentLen++;
        } else {
            maxLen = Math.max(maxLen, currentLen);
            currentLen = 1;
        }
    }

    return Math.max(maxLen, currentLen);
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])); // 9
console.log(longestConsecutive([])); // 0
console.log(longestConsecutive([1])); // 1
console.log(longestConsecutive([1, 2, 3, 4, 5])); // 5
