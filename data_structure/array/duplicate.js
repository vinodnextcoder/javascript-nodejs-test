/**
 * @param {number[]} nums
 * @return {number[]}
 * @author {vinod }
 * @description Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
 */

const findDuplicates = nums => {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;

    if (nums[index] < 0) {
      console.log(nums[i])
      result.push(Math.abs(nums[i]));
    } else {
      console.log(nums[index])
      nums[index] = -nums[index];
    }
  }

  return result;
};
let temp=findDuplicates([4,3,2,7,8,2,3,1])
console.log(temp);