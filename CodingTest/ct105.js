// 제로베이스 코딩테스트
// member 배열이 인수로 주어지고 최소 5명이서 숫자가 적힌 카드를 받고 시작하며 그 중 무조건 2명은 다른 숫자의 카드를 받는다.
// 다른 카드를 받은 멤버는 마피아이며 배열이 주어질 때 마피아가 위치한 인덱스 번호를 리턴

function solution(members) {
  const copyMembers = [...members].sort((a, b) => a - b);
  const mafia =
    copyMembers[0] === copyMembers[2] ? copyMembers.at(-1) : copyMembers[0];
  return [members.indexOf(mafia), members.lastIndexOf(mafia)];
}
