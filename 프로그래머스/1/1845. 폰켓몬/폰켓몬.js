function solution(nums) {
    var answer = 0;
    
    const canGet = nums.length / 2;
    let numsType = {};
    
    for(const type of nums){
        numsType[type] = (numsType[type] || 0) + 1;
    }
    
    const length = Object.keys(numsType).length;
    
    return canGet > length ? length : canGet;
}