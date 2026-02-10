function solution(queue1, queue2) {
    let sum1 = queue1.reduce((prev, cur) => {return prev + cur }, 0);
    let sum2 = queue2.reduce((prev, cur) => {return prev + cur}, 0);
    
    const target = (sum1 + sum2) / 2;
    
    if((sum1 + sum2) % 2 !== 0) return -1;
    
    const combined = [...queue1, ...queue2];
    let count = 0;
    let left = 0;
    let right = queue1.length;
    
    while(right < combined.length){
        if(sum1 < target){
            sum1 += combined[right % combined.length];
            right++;
            count++;
        }
        
        if(sum1 > target){
            sum1 -= combined[left % combined.length];
            left++;
            count++;
        }
        
        if(sum1 === target) return count;
    }
    
    
    return -1;
}