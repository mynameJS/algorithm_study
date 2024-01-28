// 개인정보 수집 유효기간
// https://school.programmers.co.kr/learn/courses/30/lessons/150370
// 2023 KAKAO BLIND RECRUITMENT

function solution(today, terms, privacies) {
  const result = [];
  const [nowYear, nowMonth, nowDay] = today.split(".").map(Number);
  const currentDayCount = nowYear * 12 * 28 + nowMonth * 28 + nowDay;
  privacies.forEach((data, index) => {
    const [date, termType] = data.split(" ");
    const expirationMonthPeriod = getExpirationMonthPeriod(terms, termType);
    const expirationDayCount = getExpirationDate(date, expirationMonthPeriod);
    if (currentDayCount >= expirationDayCount) {
      result.push(index + 1);
    }
  });
  return result;
}

const getExpirationMonthPeriod = (terms, termType) => {
  const targetType = terms.filter((term) => term[0] === termType)[0].split(" ");
  return +targetType[1];
};

const getExpirationDate = (date, expirationMonthPeriod) => {
  const [year, month, day] = date.split(".").map(Number);
  const yearToDays = year * 12 * 28;
  const monthToDays = (month + expirationMonthPeriod) * 28;
  const totalDays = yearToDays + monthToDays + day;
  return totalDays;
};

// 저번 카카오 겨울 공채 코테봤을떄 못풀었던 건데... 프로그래머스에 올라와서 다시 도전해보았다!!!!!!!!!!
