// 제로베이스 코딩테스트
// 정수 n을 이진수로 바꾸고 1과 1사이에 0이 가장 많은 부분 길이 찾기

function solution(n) {
  const binaryNum = n.toString(2);
  let count = 0;
  let memorizedMaxValue = 0;

  for (let i = 0; i < binaryNum.length; i++) {
    if (binaryNum[i] === "0") {
      count++;
    } else {
      memorizedMaxValue = memorizedMaxValue < count ? count : memorizedMaxValue;
      count = 0;
    }
  }
  return memorizedMaxValue + 1;
}
