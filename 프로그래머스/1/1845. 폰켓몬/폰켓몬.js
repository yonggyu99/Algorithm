function solution(nums) {
    let numsType = new Set();
    let canGet = nums.length / 2;
    
    for(const type of nums){
        numsType.add(type);
    }
    return Math.min(numsType.size, canGet);
}