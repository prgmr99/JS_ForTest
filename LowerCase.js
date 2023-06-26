function solution(myString) {
  const newArray = myString.split("").map((e) => {
    if (e === e.toUpperCase()) {
      return e.toLowerCase();
    }
    return e;
  });

  console.log(newArray);
  return newArray.join("");
}

/**
 * function solution(myString) {
    return myString.toLowerCase();
}
 */

// 중간에 return 문을 사용하는 이유는 map() 메소드의 동작 방식과 관련이 있습니다.
// map() 메소드는 배열의 각 요소에 대해 주어진 함수를 호출하고,
// 해당 함수의 반환값을 사용하여 새로운 배열을 생성합니다.
// 이때, return 문을 사용하여 각 요소의 변환 결과를 반환해야 새로운 배열에 올바르게 저장됩니다.
