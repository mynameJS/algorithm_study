// 제로베이스 코딩테스트

// 무인도에 갇힌  N명의 인원이 우연히 발견한 보트를 통해 탈출을 생각하고 있습니다.
// 보트의 경우 2인승이라 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한이 있습니다.

function solution(A, K) {
  let boatCount = 0;
  const people = A.sort((a, b) => a - b);

  while (people.length > 0) {
    const currentBigMan = people.pop();
    for (let i = -1; i >= people.length * -1; i--) {
      const nextBigMan = people.at(i);
      if (currentBigMan + nextBigMan <= K) {
        people.splice(i, 1);
        break;
      }
    }
    boatCount++;
  }
  return boatCount;
}
