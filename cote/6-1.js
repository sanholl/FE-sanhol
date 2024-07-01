/**
 * 내용이 정수로 이루어진 문자열 s가 있습니다. 
 * 이때 문자열에 더 많이 포함된 순서대로 숫자를 출력하는 프로그램을 구현하세요
 * 출력할 때 각 숫자는 공백으로 구분하고, 문자열에 포함되지 않은 숫자도 0번 등장한 것으로 가정하여
 * 0~9 숫자를 모두 출력하세요.
 * 
 * s: 양의 정수가 담긴 문자열
 * s에 포함된 횟수가 많은 순서대로 적힌 문자열 반환
 * 
 * 1 <= s <= 1000000
 * 
 * 예시
 * s = '221123'
 * "2 1 3 0 4 5 6 7 8 9"
 * -> 많이 나타난 순서대로 2, 1, 3을 출력하며, 나타난 횟수가 0번인 나머지 숫자들은 숫자가 작은 수부터 순서대로 출력
 */

function solution(s) {
  let answer = '';
  let arr = new Array(10).fill(0);

  for (let i = 0, x = s.length; i < x; i++) {
    arr[parseInt(s[i])]++;
  };

  let objectArray = arr.map((count, index) => ({num: index, count}));
  objectArray.sort((a, b) => b.count - a.count);
  
  // for(let i = 0, x = objectArray.length; i < x; i++) {
  //   answer += objectArray[i].num + ' ';
  // }
  // return answer;
  return objectArray.map(item => item.num).join(' ');
}

const s = "112223";

console.log(solution(s));