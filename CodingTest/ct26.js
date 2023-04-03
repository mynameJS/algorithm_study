/* 특이한 정렬
https://school.programmers.co.kr/learn/courses/30/lessons/120880
*/

function solution(numlist, n) {
    return numlist.sort((a, b) => {
      // 만약 절대값이 같다면 더 큰 값을 앞에다 두기
      if (Math.abs(a - n) === Math.abs(b - n)) {
        return a < b ? 1 : -1 // return 값 1이면 a < b , return 값 -1 이면 a > b, a = b 이면 return 값 0인 sort문(아래정리)
      }
      // 절대값 차이를 기준으로 오름차순 정렬
      return Math.abs(a - n) - Math.abs(b - n)
    })
  }

  /* sort 문 정리
  function compareFn(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
*/
