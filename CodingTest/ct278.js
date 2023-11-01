// 평행
// https://school.programmers.co.kr/learn/courses/30/lessons/120875#

function solution(dots) {
  const inclination = (dot1, dot2) => {
    return (dot1[1] - dot2[1]) / (dot1[0] - dot2[0]);
  };

  if (inclination(dots[0], dots[1]) === inclination(dots[2], dots[3])) return 1;
  if (inclination(dots[0], dots[2]) === inclination(dots[1], dots[3])) return 1;
  if (inclination(dots[0], dots[3]) === inclination(dots[1], dots[2])) return 1;

  return 0;
}
