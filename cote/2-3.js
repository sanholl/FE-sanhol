/**
 * 숫자로 이루어진 문자열 s가 있습니다.
 * 이 문자열에서 가장 많이 등장하는 0~9 사이의 숫자를 출력하는 프로그램을 구현
 * 단, 가장 많이 등장하는 수가 여러 개라면, 그중 가장 작은 수를 반환하세요.
 * 
 * 예시1) s = '174771177' / 7이 가장 많이 등장하였으므로 답은 7
 * 예시2) s = '552342502' / 2와 5가 가장 많이 등장하지만, 2가 더 작으므로 답은 2
 */
function solution(s) {
  let answer = 0;
  let totalCount = 0;

  for (let i = 0; i < s.length; i++) {
    let count = 0;
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        count++;
      }
    }
    if(count > totalCount) {
      totalCount = count;
      answer = Number(s[i]);
    } else if(count === totalCount) {
      answer = Math.min(answer, Number(s[i]));
    }
  }

  return answer;
}

// const s = "174771177";
const s = '552342502';
console.log(solution(s))