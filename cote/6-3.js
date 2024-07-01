/**
 * 문자열 S는 숫자와 사칙연산 기호(+, -, *, /)로 이루어진 수식입니다.
 * 해당 수식을 사칙연산 계산 순서에 맞춰 계산하는 프로그램을 작성하세요.
 * 단, 결과는 소수점 자리는 2번째 자리까지 표현합니다. 
 * 즉, 소수점 자리 3번째 자리에서 내림하여 실수(double) 형식으로 출력하세요.
 * 
 * S: 숫자와 사칙연산으로 이루어진 문자열
 * S 수식을 계산한 결과를 double로 반환
 * 1 <= S <= 100
 * 
 * 예시1
 * S = "2*3+5/6*3+15"
 * 23.50
 * 
 * 예시2
 * S = "10/3"
 * 3.33
 */

// eval()사용, 해킹 위험으로 인해 eval()사용은 비추
// function solution(S) {
//   const result = eval(S);
//   return result.toFixed(2);
// }

function solution(S) {
  // 숫자와 연산자를 분리
  const tokens = S.match(/(\d+(\.\d+)?)|[\+\-\*\/]/g);

  const values = [];
  const operators = [];

  const precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2
  };

  function applyOperator() {
      const operator = operators.pop();
      const b = parseFloat(values.pop());
      const a = parseFloat(values.pop());

      switch (operator) {
          case '+':
              values.push(a + b);
              break;
          case '-':
              values.push(a - b);
              break;
          case '*':
              values.push(a * b);
              break;
          case '/':
              values.push(a / b);
              break;
      }
  }

  tokens.forEach(token => {
      if (!isNaN(token)) {
          values.push(token);
      } else {
          while (operators.length && precedence[operators[operators.length - 1]] >= precedence[token]) {
              applyOperator();
          }
          operators.push(token);
      }
  });

  while (operators.length) {
      applyOperator();
  }

  const result = parseFloat(values[0]);
  return result.toFixed(2);
}

const S = "2*3+5/6*3+15";

console.log(solution(S))