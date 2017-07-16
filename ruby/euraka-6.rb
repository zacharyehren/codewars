#Exercise - https://www.codewars.com/kata/take-a-number-and-sum-its-digits-raised-to-the-consecutive-powers-and-dot-dot-dot-eureka/train/ruby

def sum_dig_pow(a, b)
  numArray = []
  power = 1
  sum = 0;
  for num in a..b
    if num < 10
      numArray.push(num)
    elsif num > 10
     c = num.to_s.split('').map(&:to_i)
     c.each do | i |
       sum += (i ** power)
       power += 1
      if sum == num
        numArray.push(num)
      end
     end
    else
      return numArray
    end
  end
end
