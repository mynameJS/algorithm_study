// 가장 많이 등장하는 문자열 찾기
// 문자열 s가 주어집니다.
// 이 문자열에서 가장 많이 등장하는 문자를 출력하는 함수를 출력하세요.
// 단, 가장 많이 등장하는 문자열이 여러 개 라면 사전순으로 정렬했을 때 더 앞에 위치하는 문자를 출력합니다.

function solution(s) {
  const count = {};
  const sArr = Array.from(s);
  sArr.forEach((i) => {
    if (count[i]) {
      count[i]++;
    } else {
      count[i] = 0 + 1;
    }
  });

  let maxCount = 0;
  let mostCountingkey = [];

  for (const key in count) {
    if (count[key] > maxCount) {
      maxCount = count[key];
      mostCountingkey = [key];
    } else if (count[key] === maxCount) {
      mostCountingkey.push(key);
    }
  }

  mostCountingkey.sort();

  return mostCountingkey[0];
}
