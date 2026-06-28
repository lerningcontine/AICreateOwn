records = [
    {"name": "工资", "type": "income", "amount": 5000},
    {"name": "早餐", "type": "expense", "amount": 12},
    {"name": "交通", "type": "expense", "amount": 8},
]

balance = 0

for record in records:
    if record["type"] == "income":
        balance = balance + record["amount"]
    else:
        balance = balance - record["amount"]

print("账单明细：")
for record in records:
    print(record["name"], record["type"], record["amount"])

print("当前余额：", balance)

