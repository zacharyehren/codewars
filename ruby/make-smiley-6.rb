#Exercise - https://www.codewars.com/kata/583203e6eb35d7980400002a

def count_smileys(arr)
  smile_count = 0
  arr.each do | x |
    if x == ":)" || x == ":D" || x == ";)" || x == ";D" || x == ":-)" || x == ":~)" || x == ":~D" || x == ";-)" || x == ";-D" || x == ";~)" || x == ";~D" || x == ":-D"
      smile_count += 1
    end
   end
   print arr
   return smile_count
end
