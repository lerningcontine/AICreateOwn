filename = "todo.txt"


def load_tasks():
    try:
        with open(filename, "r", encoding="utf-8") as file:
            return [line.strip() for line in file.readlines()]
    except FileNotFoundError:
        return []


def save_tasks(tasks):
    with open(filename, "w", encoding="utf-8") as file:
        for task in tasks:
            file.write(task + "\n")


tasks = load_tasks()

while True:
    print("\n1. 查看任务")
    print("2. 新增任务")
    print("3. 完成第一个任务")
    print("4. 退出")

    choice = input("请选择：")

    if choice == "1":
        if not tasks:
            print("还没有任务。")
        for index, task in enumerate(tasks, start=1):
            print(index, task)
    elif choice == "2":
        task = input("输入新任务：")
        tasks.append(task)
        save_tasks(tasks)
        print("已保存。")
    elif choice == "3":
        if tasks:
            done = tasks.pop(0)
            save_tasks(tasks)
            print("完成：", done)
        else:
            print("没有可完成的任务。")
    elif choice == "4":
        print("下次继续。")
        break
    else:
        print("请输入 1-4。")

