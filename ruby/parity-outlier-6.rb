#Exercise - https://www.codewars.com/kata/5526fc09a1bbd946250002dc



def find_outlier(integers)
  even = integers.select { | i | i.even? }
  odd = integers.select { | i | i.odd? }
  if odd.length == 1
    return odd[0]
  else
    return even[0]
  end
end
