# Python 零基础详细讲义

这份讲义配合 `index.html` 使用。页面负责“有趣和互动”，讲义负责“讲细和复习”。

## 0. 学之前先建立正确感觉

不要把 Python 想成很神秘的东西。程序本质上是在告诉电脑：

1. 拿到什么数据。
2. 把数据放在哪里。
3. 按什么规则处理。
4. 最后输出什么结果。

以后每看到一段代码，就问这 4 个问题。

## 1. 第一行代码

```python
print("Hello Python")
```

解释：

- `print` 表示“打印、输出、显示”。
- 括号里放要输出的内容。
- 文字要放在引号里。

练习：

- 输出你的名字。
- 输出今天的日期。
- 输出一句学习宣言。

常见错误：

- 中文引号不能直接当代码引号，建议用英文双引号 `"..."`。
- 括号少一个会报错。

## 2. 变量：给数据贴名字

```python
name = "小白"
age = 18
```

变量像一个贴了标签的盒子。`name` 这个盒子里放 `"小白"`，`age` 这个盒子里放 `18`。

命名建议：

- 用英文。
- 多个单词用下划线：`total_price`。
- 名字要看得懂，不要全写成 `a`、`b`、`c`。

练习：

```python
product_name = "苹果"
price = 5
count = 3
print(price * count)
```

## 3. 数据类型：不同盒子装不同东西

常见类型：

- 字符串 `str`：文字，比如 `"Python"`。
- 整数 `int`：没有小数点的数字，比如 `100`。
- 浮点数 `float`：小数，比如 `9.9`。
- 布尔值 `bool`：只有 `True` 和 `False`。

为什么要分类型：

```python
print(1 + 2)      # 3
print("1" + "2")  # 12
```

数字相加是计算，字符串相加是拼接。

## 4. 输入：让用户参与

```python
name = input("你叫什么？")
print("你好，" + name)
```

注意：`input()` 得到的永远是字符串。如果要做数学计算，需要转换：

```python
age = int(input("你几岁？"))
print(age + 1)
```

## 5. 条件判断：让程序会选择

```python
score = 86

if score >= 90:
    print("优秀")
elif score >= 60:
    print("及格")
else:
    print("继续练")
```

关键点：

- `if` 后面是条件。
- 条件后面有冒号。
- 下一行要缩进，通常是 4 个空格。
- `elif` 是“否则如果”。
- `else` 是“前面都不满足就走这里”。

练习：

- 余额大于商品价格，输出“购买成功”。
- 否则输出“余额不足”。

## 6. 循环：让电脑做重复活

`for` 适合次数明确的重复：

```python
for day in range(1, 8):
    print("打卡第", day, "天")
```

`while` 适合满足条件就继续：

```python
energy = 3
while energy > 0:
    print("继续学习")
    energy = energy - 1
```

常见错误：

- `while` 里忘记改变条件，会变成死循环。
- 循环体缩进不对，代码不会按你想的重复。

## 7. 列表：保存一串东西

```python
foods = ["包子", "豆浆", "鸡蛋"]
foods.append("苹果")

for food in foods:
    print(food)
```

常用操作：

- `append()` 添加。
- `len()` 计算长度。
- `foods[0]` 取第一个。
- `foods[-1]` 取最后一个。

## 8. 字典：保存有名字的信息

```python
person = {
    "name": "小白",
    "age": 18,
    "city": "上海",
}

print(person["name"])
```

字典适合保存一个对象的多项信息，比如商品、用户、订单、账单。

## 9. 函数：把常用逻辑打包

```python
def add(a, b):
    return a + b

result = add(3, 5)
print(result)
```

函数的好处：

- 同一段逻辑不用复制很多遍。
- 程序结构更清楚。
- 改功能时只改一个地方。

## 10. 文件：让数据留下来

写文件：

```python
with open("note.txt", "w", encoding="utf-8") as file:
    file.write("今天学了 Python")
```

读文件：

```python
with open("note.txt", "r", encoding="utf-8") as file:
    print(file.read())
```

`w` 会覆盖原内容，`a` 会追加到末尾。

## 11. 异常：程序出错时别直接崩

```python
try:
    number = int(input("输入数字："))
    print(100 / number)
except ValueError:
    print("请输入真正的数字")
except ZeroDivisionError:
    print("不能除以 0")
```

异常处理不是为了隐藏错误，而是为了给用户一个更友好的提示。

## 12. 学完后的三个方向

1. 自动化办公：批量改文件名、整理表格、生成报表。
2. 数据分析：统计数据、画图、找规律。
3. Web 和小工具：做网页后台、接口、个人工具。

建议你先把 `examples/` 里的三个项目手敲一遍，再各加一个功能：

- 猜数字：限制最多猜 7 次。
- 记账本：让用户自己输入账单。
- 待办清单：支持删除指定编号的任务。

