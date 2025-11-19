function solution(nums) {
  const maxCanSelect = nums.length / 2;
  const uniqueKinds = new Set(nums).size;
  return Math.min(uniqueKinds, maxCanSelect);
}