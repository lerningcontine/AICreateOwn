filename = "diary.txt"

content = input("写一句今天的学习记录：")

with open(filename, "a", encoding="utf-8") as file:
    file.write(content + "\n")

try:
    with open(filename, "r", encoding="utf-8") as file:
        print("目前的记录：")
        print(file.read())
except FileNotFoundError:
    print("还没有记录文件。")

