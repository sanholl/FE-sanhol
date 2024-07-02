/**
 * 상현이는 낱마 게임을 하고 있습니다. 패턴이 주어졌을 때, 이 패턴대로 낱말을 골라 순서에 맞게 연속해서 말하는 게임입니다.
 * 
 * 패턴 p는 문자열로, 각 문자가 패턴의 심볼을 표현합니다. 예를 들어 주어진 패턴 p가 '가나나가'라면, 가 나 나 가 에 맞는 낱말을
 * 순서대로 말하면 됩니다.
 * 각 패턴에는 아무 낱말이나 사용할 수 있습니다. 단, 다른 패턴에 사용한 낱말을 다시 사용할 수는 없습니다.
 * 예를 들어, 가 패턴에는 드래곤 이라는 낱말을 선택하고, 나 패턴에는 바나나 라는 낱말을 선택했다면 상현이는 드래곤 바나나 바나나 드래곤
 * 이라고 말했을 때 게임에서 승리합니다.
 * 동일한 패턴일 때, 다른 낱말을 선택할 수도 있습니다. 예를 들어 '상현이 천재 천재 상현이' 라고 말해도, '땡칠이 바보 바보 땡칠이'라고 말해도
 * 게임에서 승리합니다.
 * 단, 같은 패턴인데 다른 낱말을 선택하여 '드래곤 바나나 바바나 드레곤'이라고 하거나, 다른 패턴인데 같은 낱말을 선택하여
 * '집에가고싶다 집에가고싶다 집에가고싶다 집에가고싶다'라고 할 경우에는 게임에서 패배합니다.
 * 패턴 p 와 상현이의 답안 s 가 주어졌을 때, 게임에서 승리했는지 여부를 출력하는 프로그램을 구현하세요.
 * 
 * p.length = 4
 * 0 < s.length <= 1000
 * 
 * 예시1)
 * p = '가나다라'
 * s = '바나나 드래곤 스리랑카 오염'
 * true
 * 
 * 예시2)
 * p = '갸가갸가'
 * s = '금도끼 은도끼 철도끼 은도끼'
 * false
 */

// 내 풀이
function solution(p, s) {
  let answer = '';

  let object = {};
  const sArray = s.split(' ');

  for(let i = 0; i < p.length; i++) {
    object[p[i]] = sArray[i]
  }

  for(let i = 0; i < p.length; i++) {
    answer += object[p[i]] + ' '
  }

  return answer.trim() === s; 
}

const p = '가나다라'
const s = '바나나 드래곤 스리랑카 오염'

console.log(solution(p, s));

// 정답 풀이
function solution2(p, s) {
  let patternToWord = {};
  let usedWords = new Set();
  const sArray = s.split(' ');

  if (p.length !== sArray.length) {
    return false;  // 패턴 길이와 단어 길이가 다르면 false
  }

  for (let i = 0; i < p.length; i++) {
    const pattern = p[i];
    const word = sArray[i];

    if (patternToWord[pattern] === undefined) {
      if (usedWords.has(word)) {
        return false;  // 다른 패턴에 이미 사용한 단어면 false
      }
      patternToWord[pattern] = word;
      usedWords.add(word);
    } else if (patternToWord[pattern] !== word) {
      return false;  // 동일 패턴이 다른 단어에 매핑되면 false
    }
  }

  return true;
}