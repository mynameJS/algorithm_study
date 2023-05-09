// 부족한 금액 계산하기
// https://school.programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
  let needMoney = 0;
  for (let i = 1; i <= count; i++) {
    needMoney += price * i;
  }
  const result = money - needMoney;
  return result > 0 ? 0 : Math.abs(result);
}
