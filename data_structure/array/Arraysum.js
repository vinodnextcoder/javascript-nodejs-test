function subArraySum(arr, n, sum) {
  for (i = 0; i < n - 1; i++) {
    curr_sum = arr[i]
    j = i + 1
    while (j <= n - 1) {
      if (curr_sum == sum) {
        console.log("indexes % d and % d" % (i, j - 1))
        return 1
      }
      if (curr_sum > sum || j == n) {
        break
      }
      curr_sum = curr_sum + arr[j]
      j += 1
    }
  }
  console.log("No subarray found")
  return 0
}
let arr = [15, 2, 4, 8, 9, 5, 10, 23]
// let n = 7
let sum = 23

subArraySum(arr, 8, sum)
    
       