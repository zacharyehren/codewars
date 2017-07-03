#Exercise - https://www.codewars.com/kata/550498447451fbbd7600041c

#Original Solution
def comp(array1, array2)
  if array1.any?
    ascArray1 = array1.sort
    ascArray2 = array2.sort
    ascArray1.map! {|i| i ** 2 }
    if ascArray1 == ascArray2
      return true
    else
      return false
    end
  elsif array2 == nil
    return false
  elsif array1.empty? && array2.empty?
      return true
  else
    return false
  end
end



#Refactored Solution 
def comp(array1, array2)
  if array1.any?
    ascArray1 = array1.sort.map! {|i| i ** 2 }
    ascArray2 = array2.sort
    ascArray1 == ascArray2 ? true : false
  elsif array2 == nil
    return false
  elsif array1.empty? && array2.empty?
      return true
  else
    return false
  end
end
