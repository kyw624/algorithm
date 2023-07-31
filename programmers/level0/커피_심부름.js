function solution(order) {
  return order.reduce((acc, cur) => {
    const price = cur.includes("latte") ? 5000 : 4500;
    return acc + price;
  }, 0);
}
