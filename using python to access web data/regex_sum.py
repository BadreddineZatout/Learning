import re
import numpy as np

nums = []
sum = 0
f = open("regex_sum.txt", "r")

for line in f:
    y = re.findall('[0-9]+', line)
    for x in y:
        nums.append(int(x))

print(nums)
b = np.sum(nums)
print(b)