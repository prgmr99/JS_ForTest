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
