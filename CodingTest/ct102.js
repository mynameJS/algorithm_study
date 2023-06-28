// 완주하지 못한 선수
// https://school.programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
  const pc = [...participant, ...completion];
  const pcObj = {};
  for (let i in pc) {
    if (pcObj.hasOwnProperty(pc[i])) {
      pcObj[pc[i]] += 1;
    } else {
      pcObj[pc[i]] = 1;
    }
  }
  for (let key in pcObj) {
    if (pcObj[key] % 2 === 1) return key;
  }
  return;
}

// 처음에는 참가자 중 동명이인이 있다는 제한사항을 체크하지 못하고 단순히 filter 함수를 써서 일치하지 않은 인덱스를 찾았다.
// 그 이후로 제한사항을 체크 한 뒤 참가자 배열과 완주자 배열을 일대일 비교를 통해 홀수개인 이름을 반환하는 코드를 짯는데 테스트케이스는 통과를 하였으나 효율성 검사에서 탈락하였다.
// 그리고 나서 참가자 배열과 완주자 배열을 합친 후 각각의 이름을 프로퍼티 키로 가지고 등장 횟수를 값으로 가지는 객체를 생성한 후
// 그 값이 홀수인 프로퍼티 키를 반환하는 식으로 문제를 풀었다.
