/**
 * 정수로 이루어진 두 개의 배열 arr1, arr2가 주어집니다.
 * 두 배열에 동시에 존재하는 숫자들은 모아서 배열로 출력하는 프로그램을 작성하세요.
 * 출력 배열은 정수를 오름차순으로 정렬하여 반환하세요
 * 단, 같은 숫자가 arr1이나 arr2에 여러 개 있어도 출력 배열에는 하나만 포함시키세요
 * 
 * 0 < arr1.length <= 100
 * 0 < arr2.length <= 100
 * 1 <= arr[i], arr2[i] <= 100
 * 
 * 예시1
 * arr1 = [1, 7, 8, 4]
 * arr2 = [2, 4, 6, 8]
 * [4, 8]
 * 
 * 예시2
 * arr1 = [9, 1, 1, 4, 1, 2, 3, 4]
 * arr2 = [5, 6, 10, 12]
 * []
 */
function solution(arr1, arr2) {
  var answer = [];
  
  if(arr1.length > 100 || arr1.length === 0) {
    return;
  }
  if(arr2.length > 100 || arr2.length === 0) {
    return;
  }

  let set1 = new Set(arr1);
  let set2 = new Set(arr2);

  answer = [...set1].filter(item1 => set2.has(item1)).sort((a, b) => a - b);

  return answer;
}

// const arr1 = [1, 7, 8, 4, 4]
// const arr2 = [2, 4, 6, 8, 4]
const arr1 = [9, 1, 1, 4, 1, 2, 3, 4];
const arr2 = [5, 6, 10, 12]

console.log(solution(arr1, arr2));