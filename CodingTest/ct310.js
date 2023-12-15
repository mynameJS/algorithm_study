// 제로베이스 코딩테스트
// 0 ~ 100까지의 숫자가 적혀있는 카드가 있습니다.
// 해당 카드를 뽑은 순서에 따라 아래 규칙에 의거해 점수를 책정합니다.

// 1. 뽑은 카드의 숫자와 현재 까지 뽑은 카드의 수를 곱한다.
// 2. 짝수번째로 뽑은 카드의 경우 -1을 더 곱한다.

function solution(A) {
  const cardList = A.sort((a, b) => a - b);
  const maxScoreList = [];
  let left = 0;
  let right = cardList.length - 1;

  while (left <= right) {
    if (cardList.length % 2) {
      if (left !== right) {
        maxScoreList.push(cardList[right]);
        maxScoreList.push(cardList[left]);
      } else {
        maxScoreList.push(cardList[right]);
      }
    } else {
      if (left !== right) {
        maxScoreList.push(cardList[left]);
        maxScoreList.push(cardList[right]);
      } else {
        maxScoreList.push(cardList[left]);
      }
    }

    left++;
    right--;
  }
  return maxScoreList.reverse().reduce((a, c, i) => {
    const idx = i + 1;
    if (idx % 2) {
      return a + c * idx;
    } else {
      return a + c * -idx;
    }
  }, 0);
}
