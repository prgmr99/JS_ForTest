function solution(emergency) {
  let order = new Map();
  let desc = [...emergency].sort((a, b) => b - a);
  for (let i = 0; i < desc.length; i++) {
    order.set(desc[i], i + 1);
  }
  return emergency.map((v) => order.get(v));
}

/* 
JavaScript에서 제공하는 내장 객체인 Map을 생성하는 생성자 함수입니다.
Map은 키-값 쌍으로 이루어진 데이터를 저장하며, 
특정 키에 대한 값을 쉽게 검색하고 조작할 수 있는 자료구조입니다.
const myMap = new Map();

// 키-값 쌍 추가
myMap.set("name", "John");
myMap.set("age", 30);

// 키-값 쌍 검색
console.log(myMap.get("name")); // "John"

// 키의 존재 여부 확인
console.log(myMap.has("age")); // true

// 키-값 쌍 제거
myMap.delete("name");

// 맵의 크기 확인
console.log(myMap.size); // 1

// 맵의 순회
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

*/
/**
 * 
 * 스프레드 문법(spread syntax)을 사용하여 배열 arr을 새로운 배열로 펼치는 것을 의미합니다. 
 * 이를 통해 배열을 복사하거나 배열의 요소를 다른 배열에 추가하는 등의 작업을 수행할 수 있습니다.
const arr = [1, 2, 3];
const newArr = [...arr];

console.log(newArr); // [1, 2, 3]
 */
