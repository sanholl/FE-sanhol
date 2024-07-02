/**
 *  문자열 s가 주어집니다. s가 pangram 인지 판단하는 함수, solution을 완성해주세요.
 * pangram이란 모든 알파벳이 사용된 문장을 말합니다.
 * 
 * s는 길이가 1이상 1000이하인 문자열입니다.
 * s는 소문자 알파벳과 공백('')으로만 구성됩니다.
 * 
 * true, false 출력
 * 
 * "abcdefghijklmnopqrstuvwxyz" - true
 */


const solution = (s) => {
  const alphabetSet = new Set('abcdefghijklmnopqrstuvwxyz');
  
  for (const char of s) {
    alphabetSet.delete(char);
  }
  return alphabetSet.size === 0;
};

console.log(solution('abcdefghijklmnopqrstuvaaawxyz'));