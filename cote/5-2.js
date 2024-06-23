/**
 * 이진 힙은 항상 부모 노드가 가지는 값이 자식 노드가 가지는 값보다 크거나(max heap) 혹은 작거나 같다는(min heap)
 * 조건을 만족하는 완전 이진 트리 형태의 자료구조입니다.
 * 완전 이진 트리는 마지막 레벨을 제외하고 모든 레벨이 완전히 채워져 있으며, 마지막 레벨의 모든 노드는 가장 왼쪽에서부터
 * 순서대로 나열되는 이진 트리를 말합니다.
 * 이러한 이진 힙은 보통 배열을 통해서 구현하게 됩니다.
 * 배열의 0번 인덱스는 사용하지 않고, 배열의 1번 인덱스에 루트 노드의 값을 저장합니다.
 * 현재 노드의 인덱스가 i일 때, i*2 인덱스에 왼쪽 자식 노드, i*2+1 인덱스에 오른쪽 자식 노드를 저장합니다.
 * 예를 들어 {0, 5, 10, 15}는 루트 노드의 값이 5이고, 루트 노드의 왼쪽 자식과 오른쪽 자식이
 * 각각 10, 15인 이진 힙으로 볼 수 있습니다.
 * 
 * 배열 arr가 주어졌을 때, 이 배열이 min heap인지 아닌지 판단하여 'YES'또는 'NO'로 출력하는 프로그램을 구현하세요
 * 
 * 1 <= arr.length <= 100
 * 
 * 예시1
 * arr = {0, 5, 10, 15}
 * YES
 * 
 * 예시2
 * arr = {0, 20, 22 17}
 * NO
 * 17은 20의 자식 노드이지만 값이 더 크므로 min heap이 아니다
 */
function solution(arr) {
  var answer = 'YES';

  if(arr.length === 0 || arr.lengt > 100) {
    return;
  }

  for(let i = 1; i <= Math.floor((arr.length - 1) / 2); i++) {
    const root = arr[i];
    const leftIndex = i * 2;
    const rightIndex = i * 2 + 1;

    if(leftIndex < arr.length && root > arr[leftIndex]) {
      answer = 'NO';
      break;
    }
    if(rightIndex < arr.length && root > arr[rightIndex]) {
      answer = 'NO';
      break;
    }
  }
  
  return answer;
}

const arr = [0, 20, 22, 23];
console.log(solution(arr));