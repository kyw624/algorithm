# 크로아티아 알파벳

word = input()

ALP = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

for i in ALP:
    word = word.replace(i, '*')

print(len(word))
