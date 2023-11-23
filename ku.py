print("Hello, I'm Python!")

abs = ['abb', 'ee']
# 
'''
666
'''
print(abs)
## 使用函数
def getName(name): 
  return f"Hello {name}!"

name1 = getName('Python')

print(name1)


#  使用列表
my_list = [1, 2, 3, 4, 5, 6]
abc = []
for num in my_list:  # 条件语句
  if num > 5 :
    print(f'{num} 是大于5的数')
  elif num < 5 and num > 2: 
    print(f'{num} 是大于2且小于5的数')
  elif num == 5: 
    print(f'{num} 是5')
  else:
    print(f'{num} 是小于5的数')
    abc.append(num)
print(abc)
# 条件语句

x = 10 
