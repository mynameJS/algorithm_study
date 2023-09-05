// 커피 심부름
// https://school.programmers.co.kr/learn/courses/30/lessons/181837

function solution(order) {
  let totalPrice = 0;
  order.forEach((v) => {
    if (v.includes("americano") || v === "anything") {
      totalPrice += 4500;
    } else if (v.includes("latte")) {
      totalPrice += 5000;
    }
  });
  return totalPrice;
}
