// 신규 아이디 추천
// https://school.programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
  const step1 = new_id.toLowerCase();

  const step2 = step1.replace(/[^a-z0-9-_.]/g, "");

  const step3 = step2.replace(/\.{2,}/g, ".");

  const step4 = step3.replace(/^\.+|\.+$/g, "");

  const step5 = step4 === "" ? "a" : step4;

  const step6 =
    step5.length >= 16 ? step5.slice(0, 15).replace(/^\.+|\.+$/g, "") : step5;

  const step7 =
    step6.length < 3 ? step6 + step6.at(-1).repeat(3 - step6.length) : step6;

  return step7;
}

// 정규 표현식 지옥...
