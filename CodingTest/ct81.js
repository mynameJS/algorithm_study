// 폰켓몬
// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  const onlyOneNum = [];
  for (let i = 0; i < nums.length; i++) {
    if (onlyOneNum.includes(nums[i])) continue;
    else onlyOneNum.push(nums[i]);
  }
  const answer =
    onlyOneNum.length > nums.length / 2 ? nums.length / 2 : onlyOneNum.length;
  return answer;
}
