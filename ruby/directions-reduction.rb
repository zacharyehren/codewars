#Exercise - https://www.codewars.com/kata/directions-reduction/ruby

def dirReduc(arr)

h = {
  north: arr.count("NORTH"),
  east: arr.count("EAST"),
  south: arr.count("SOUTH"),
  west: arr.count("WEST")
}
newArray = [];

  if h[:north] > h[:south] && h[:east] == h[:west]
   newArray.push("NORTH")
  elsif h[:north] < h[:south] && h[:east] == h[:west]
    newArray.push("SOUTH")
  elsif h[:north] == h[:south] && h[:east] > h[:west]
    newArray.push("EAST")
  elsif h[:north] == h[:south] && h[:east] < h[:west]
    newArray.push("WEST")
  elsif h[:north] > h[:south] && h[:east] > h[:west]

  else
    return newArray
  end

  return newArray
end
