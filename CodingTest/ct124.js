// 개인정보 수집 유효기간
// https://school.programmers.co.kr/learn/courses/30/lessons/150370

function solution(today, terms, privacies) {
  const answer = [];
  const curDayArr = today.split(".");
  const curDay =
    curDayArr[0].slice(-2) * 12 * 28 + curDayArr[1] * 28 + +curDayArr[2];

  for (let i = 0; i < privacies.length; i++) {
    const priArr = privacies[i].split(".");
    const priDay =
      priArr[0].slice(-2) * 12 * 28 + priArr[1] * 28 + +priArr[2].slice(0, 2);
    for (let j = 0; j < terms.length; j++) {
      if (terms[j].includes(priArr[2].at(-1))) {
        const expiredTerm = terms[j].match(/\d+/) * 28;
        const expiredDay = priDay + expiredTerm;
        if (curDay >= expiredDay) {
          answer.push(i + 1);
        }
      }
    }
  }
  return answer;
}
