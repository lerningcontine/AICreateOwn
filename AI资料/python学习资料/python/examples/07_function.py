def discount_price(price, discount):
    return price * discount


origin_price = 100
final_price = discount_price(origin_price, 0.8)

print("原价：", origin_price)
print("折后价：", final_price)

