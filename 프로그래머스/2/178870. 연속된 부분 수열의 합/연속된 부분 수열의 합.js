function solution(sequence, k) {
    let answer = [0, 0]
    let left = 0;
    let right = 0;
    let length = Infinity;
    let sum = sequence[0];
    
    while(right < sequence.length){
        if( sum === k ){
            let currentLength = right - left + 1;
            if(currentLength < length){
                length = currentLength
                answer = [left, right];
            }
            
            right++;
            sum += sequence[right];
        }
        
        if( sum < k ){
            right++;
            sum +=sequence[right];
        }
        
        if( sum > k){
            sum -= sequence[left];
            left++;
        }
    }
    return answer;
}