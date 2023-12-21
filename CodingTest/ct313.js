// 제로베이스 코딩테스트
// 사과나무와 오렌지나무

function solution(fruits) {
  let sum = 0;
  let maxValue = fruits[0];

  for (let i = 0; i < fruits.length; i++) {
    maxValue = Math.max(maxValue, fruits[i]);
    sum = fruits[i];
    for (let j = i + 1; j < fruits.length; j++) {
      sum += fruits[j];
      maxValue = Math.max(maxValue, sum);
    }
  }
  return maxValue;
}
