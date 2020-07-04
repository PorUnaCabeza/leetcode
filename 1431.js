var kidsWithCandies = function(candies, extraCandies) {
  const max = Math.max(...candies)
  const min = Math.min(...candies)
  const result = []
  for (let i = 0; i < candies.length; i++) {
    const v = candies[i]
    result.push(false)
    if (v + extraCandies >= max) {
      result[i] = true
      console.log(result[i])
    }
  }
  return result
}

kidsWithCandies([12, 1, 12], 10)
