// 모의고사
// https://school.programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  const answer = [];

  // 수포자 3명 각각 패턴 한 싸이클씩 선언
  const pattern1 = [1, 2, 3, 4, 5];
  const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let result1 = [];
  let result2 = [];
  let result3 = [];

  let score1 = 0;
  let score2 = 0;
  let score3 = 0;

  // 각 3명의 정답지 concat 이용해서 길이 맞추기, 기준은 제일 짧은 패턴인 1번으로 했음
  // 어차피 아래 for문에서 answers 길이만큼만 반복할거기 때문에 더 길어져도 상관없다고 생각함(불필요하게 길어지긴 하지만 각각 로직을 짜면 코드가 더 길어질꺼같아서)
  while (answers.length > result1.length) {
    result1 = result1.concat(pattern1);
    result2 = result2.concat(pattern2);
    result3 = result3.concat(pattern3);
  }

  // 정답지 answers와 비교해서 각 3명의 점수를 뽑았음(score)
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === result1[i]) score1++;
    if (answers[i] === result2[i]) score2++;
    if (answers[i] === result3[i]) score3++;
  }

  // 점수가 같다면 숫자순으로 정렬해서 리턴해야하므로 임의의 배열에 점수 3개를 집어넣은 후 인덱스에 맞게 최대값이랑 같으면 answer 배열에 들어가게 로직짬
  const ranking = [score1, score2, score3];

  for (let i = 1; i < 4; i++) {
    if (Math.max(...ranking) === ranking[i - 1]) {
      answer.push(i);
    }
  }

  // 같은 점수가 여러개 일시 sort함수를 사용하여 인덱스 정렬
  return answer.sort();
}
