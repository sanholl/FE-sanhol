/**
 * SNS에서 서로가 팔로우를 했다는 것을 '맞팔'이라고 표현합니다.
 * 다음 팔로우 관계를 나타낸 배열을 통해 서로 맞팔 관계인 쌍의 수를 리턴하는 함수를 작성하세요.
 * 이때 ['철수', '영희']라는 정보는 철수가 영희를 팔로우했음을 나타냅니다.
 * 
 * 팔로우 관계가 표현된 String 2차원 배열 A
 * 
 * 맞팔 관계인 쌍의 수
 * 
 * 예시
 * [["철수", "영희"], ["영희", "진수"], ["영희", "철수"], ["진수", "진호"]]
 * 0
 */
// function solution(A) {
//   var answer = 0;

// 풀이1
//   for(let i = 0; i < A.length; i++) {
//     const main = A[i][0];
//     const following = A[i][1];
//     const isFollower = A.some(item => item[0] === following && item[1] === main);
//     if(isFollower) {
//       answer += 1;
//     }
//   }
  
//   if(answer > 0) {
//     answer /= 2;
//   }
//   return answer;
// }

// 풀이2
function solution(A) {
  let answer = 0;
  let followMap = new Map();

  // 모든 팔로우 관계를 Map에 저장
  for (let i = 0; i < A.length; i++) {
    const follower = A[i][0];
    const followee = A[i][1];

    if (!followMap.has(follower)) {
      followMap.set(follower, new Set());
    }
    followMap.get(follower).add(followee);
  }

  // 맞팔 관계 확인
  for (let i = 0; i < A.length; i++) {
    const follower = A[i][0];
    const followee = A[i][1];

    if (followMap.has(followee) && followMap.get(followee).has(follower)) {
      answer += 1;
    }
  }

  // 맞팔 관계는 쌍으로 세기 때문에 반으로 나누기
  return answer / 2;
}

const A = [["철수", "영희"], ["영희", "진수"], ["영희", "철수"], ["진수", "진호"]];
console.log(solution(A));