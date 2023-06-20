// 제로베이스 코딩테스트

function solution(nums, d) {
  let answer = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1] && nums[i] % d === 0) {
      answer++;
    }
  }
  return answer;
}
