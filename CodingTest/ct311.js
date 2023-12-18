// 제로베이스 코딩테스트

// 우리나라의 화폐단위는 50000, 10000, 5000, 1000, 500, 100, 50, 10, 5, 1 원으로 이루어져 있습니다.
// 거스름돈 금액 A원이 입력 되었을때 해당 거스름돈을 만족하는 최소한의 화폐 개수를 리턴하는 함수를 작성하세요.

function solution(A) {
  const currencyUnits = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 5, 1];
  let currencyCount = 0;

  currencyUnits.forEach((unit) => {
    currencyCount += Math.floor(A / unit);
    A %= unit;
  });

  return currencyCount;
}
