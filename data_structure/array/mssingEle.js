/**
 * @param {number[]} nums
 * @return {number[]}
 * @author {vinod }
 * @description Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
 */

const findMissingNumbers = nums => {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i])
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }

  return result;
};
let temp=findMissingNumbers([4,3,2,7,8,2,3,1])
console.log(temp);