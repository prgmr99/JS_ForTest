function solution(nums) {
  const newSet = new Set([...nums]);
  const half = nums.length / 2;
  const setSize = newSet.size;

  if (setSize >= half) {
    return half;
  } else {
    return setSize;
  }
}

// 다른 사람 풀이
function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length;
}
