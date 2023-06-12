// 소수 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12977

function solution(nums) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        let count = 0;
        for (let l = 2; l <= Math.floor(Math.sqrt(sum)); l++) {
          if (sum % l === 0) {
            count++;
          }
        }
        if (count === 0) answer++;
      }
    }
  }
  return answer;
}
