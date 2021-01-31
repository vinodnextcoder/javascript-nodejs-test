function subArraySum(arr, n, sum) {
  for (i = 0; i < n; i++) {
    curr_sum = arr[i]
    j = i + 1
    while (j <= n) {
      if (curr_sum == sum) {
        console.log("indexes % d and % d" % (i, j - 1))
        return 1
      }
      if (curr_sum > sum || j == n)
        break

      curr_sum = curr_sum + arr[j]
      j += 1
    }
    print("No subarray found")
    return 0
  }

arr = [15, 2, 4, 8, 9, 5, 10, 23]
n = 8
sum = 23

subArraySum(arr, n, sum)
    
       

}