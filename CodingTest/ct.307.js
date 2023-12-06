// 제로베이스 코딩테스트
// SNS 팔로우 '맞팔'

function solution(A) {
  const data = {};
  let count = 0;
  A.forEach(([follower, follow]) => {
    if (!data[follower]) {
      data[follower] = [];
      data[follower].push(follow);
    } else {
      data[follower].push(follow);
    }
  });
  const result = Object.entries(data);
  result.forEach(([follower, followList]) => {
    followList.forEach((name) => {
      const targetList = result.find((data) => data[0] === name);
      if (targetList && targetList[1].includes(follower)) {
        count++;
      }
    });
  });
  return count / 2;
}
