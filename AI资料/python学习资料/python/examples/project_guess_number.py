import random

secret = random.randint(1, 100)
tries = 0

print("我想好了一个 1 到 100 的数字。")

while True:
    guess = int(input("你猜是多少？"))
    tries = tries + 1

    if guess > secret:
        print("太大了。")
    elif guess < secret:
        print("太小了。")
    else:
        print("猜中了！你一共猜了", tries, "次。")
        break

