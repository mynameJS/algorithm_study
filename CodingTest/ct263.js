// 가까운 수
// https://school.programmers.co.kr/learn/courses/30/lessons/120890

function solution(array, n) {
  array.push(n);
  array.sort((a, b) => a - b);

  const nIdx = array.indexOf(n);

  if (!array[nIdx - 1]) return array[nIdx + 1];
  if (!array[nIdx + 1]) return array[nIdx - 1];

  const prevNum = array[nIdx - 1];
  const nextNum = array[nIdx + 1];

  const prevInterval = Math.abs(n - prevNum);
  const nextInterval = Math.abs(n - nextNum);

  return prevInterval > nextInterval ? nextNum : prevNum;
}

// 얼리리턴을 사용하여 추가실행을 방지해보았다.
