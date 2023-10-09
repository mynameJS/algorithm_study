// 멀쩡한 사각형
// https://school.programmers.co.kr/learn/courses/30/lessons/62048

function solution(w, h) {
  var answer = 1;
  for (let i = 1; i < Math.max(w, h) + 1; i++) {
    let result = 1;
    if (w % i == 0 && h % i == 0) {
      result = i;
    }
    answer = Math.max(answer, result);
  }
  return w * h - (w + h - answer);
}

/*
결국 포인트는 겹치는 갯수 구하는 법은 : 가로 + 세로 - 최대공약수 입니다. 이것만 알면 그냥 쉽게 풀립니다. 수학문제같네요

못풀고 해설 게시물을 보고 풀었다.. 이때까지 알고리즘 강의나 수학적 접근방식에 대해 아무 생각 없이 접근했었는데

lv.2 부터는 이러한 문제들이 많이 나오는 것 같다...
*/
