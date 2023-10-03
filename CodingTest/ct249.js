// 구명보트
// https://school.programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
  people.sort((a, b) => b - a);
  let count = 0;
  people.forEach((man) => {
    if (man + people.at(-1) > limit) {
      count++;
    } else {
      people.pop();
      count++;
    }
  });
  return count;
}

// 최대 2명밖에 못탄다는 걸 늦게 알아가지고 .... ㅠㅠ 지문을 잘 읽자
