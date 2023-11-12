// 제로베이스 코딩테스트
// 주문 취소된 내역

function solution(orders, n) {
  let cancelCount = 0;
  for (let i = 1; i <= 1000; i++) {
    if (!orders.includes(i)) {
      cancelCount++;
      if (cancelCount === n) {
        return i;
      }
    }
  }
}
