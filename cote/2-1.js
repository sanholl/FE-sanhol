/**
 * n을 2진법으로 변환 후 1과 1사이가 가장 먼 거리를 구하는 코드
 */

function solution(n) {
  // 37 100101
  const binary = getBinary(n);
  
  let answer = 0;
  let pointIndex = -1;
  for(let i = 0; i < binary.length; i++) {
    if(binary[i] === '1') {
      if(pointIndex !== -1) {
        let distance = i - pointIndex;
        if(distance > answer) {
          answer = distance
        }
      }
      pointIndex = i
    }
  }

  return answer;
}

function getBinary(decimal) {
  if (decimal === 0) {
    return '0';
  }

  let binary = '';
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }

  return binary;
}


console.log(solution(5));