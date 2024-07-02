/**
 * 문자열 s가 있습니다. 이 문자열에는 여러 개의 단어가 공백으로 구분되어 적혀 있습니다.
 * 이 문자열에서 중복된 단어를 제외한 단어의 수를 출력하는 프로그램을 구현하세요
 * 
 * s: 단어가 공백으로 구분된 문자열
 * 중복을 제외한 단어의 수를 정수로 반환
 * 1 <= s.length <= 1000
 * s[i]는 영어 대소문자 또는 공백 문자
 * 
 * 예시1)
 * s = 'Hello world Nice world' - 3
 */
function solution(s) {
  let answer = 0;
  const sArray = s.split(' ');
  const set = new Set();

  for(let i = 0; i < sArray.length; i++) {
    set.add(sArray[i]);
  }
  
  answer = set.size;

  return answer;
}

const s = 'Hello world Nice world';
console.log(solution(s));