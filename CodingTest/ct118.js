// 제로베이스 코딩테스트
// 취소된 주문번호 찾기

/*

1. 문제설명
당신은 온라인으로 주문을 받고 있습니다.
주문 번호는 주문 순서대로 1 부터 1씩 증가합니다. 주문이 취소될 경우, 해당 주문 번호는 주문 내역에서 제거됩니다.

일부 주문이 취소된 주문 내역이 주어질 경우, n 번째 주문 취소된 주문 번호를 구하는 프로그램을 구현하세요.

2. 입력 형식
orders : 주문 내역이 담긴 정수 배열
n : 찾고자 하는 주문 번호의 차례의 정수

3. 출력 형식
n 번째 주문 취소된 주문 번호를 정수로 반환

4. 제한사항
0 < orders.length <= 1000
0 < n <= 1000

5. 입출력 예시

입력 : 
order = [ 2 , 4, 5, 6]
n = 3
출력 = 6

1번째 취소 주문 번호는 1
2번째 취소 주문 번호는 3
3번째 취소 주문 번호는 6

*/

function solution(orders, n) {
  let cancelCount = 0;
  let orderedNum = 1;
  let cancelNum = 0;
  for (let i = 0; i < orders.length; i++) {
    if (cancelCount === n) {
      return cancelNum;
    }

    if (orders[i] !== orderedNum) {
      cancelCount++;
      cancelNum = orderedNum;
      orderedNum = orders[i] + 1;
    } else {
      orderedNum = orders[i] + 1;
    }
  }
  return cancelNum;
}
