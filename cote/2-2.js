/**
 * 크기가 n인 숫자 배열 nums와 숫자 d가 주어집니다.
 * 0 <= a < b < n과 같다고 할 때,
 * 아래 규칙을 만족하는 a, b쌍의 개수를 출력하는 함수를 완성해주세요.
 * (규칙을 만족하는 a, b 쌍의 개수를 출력)
 * nums[a] == nums[b] 이면서 nums[a]가 d로 나누어 떨어진다.
 * 
 * 예를 들어, numb가 [4, 1, 2, 1, 4]이고 d가 2일 때 다음과 같다
 * - nums[0] == nums[4], 4는 2로 나누어 떨어진다.
 * - nums[1] == nums[3], 1은 2로 나누어 떨어지지 않는다. 
 * 결과는 1
 * 
 * 풀이 해석) 배열에서 같은 값을 갖고 d로 나누어지는 쌍의 갯수를 구한다.
 */
function solution(nums, d) {
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] === nums[j] && nums[i] % d === 0) {
        answer++;
      }
    }
  }

  return answer;
}

const nums = [4, 1, 2, 1, 4];
const d = 2;

console.log(solution(nums, d));