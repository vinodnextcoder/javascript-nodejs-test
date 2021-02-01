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
    console.log(index)
    if (nums[index] < 0) {
      
      result.push(Math.abs(nums[i]));
    } else {
      
      nums[index] = -nums[index];
    }
  }

  return result;
};
let temp=findDuplicates([4,3,2,7,8,2,3,1])
// console.log(temp);

data=[1,2,3,3]
function getDuplicate(data){
  return data.filter((value,index)=>data.indexOf(value)===index);
}
console.log(getDuplicate(data))