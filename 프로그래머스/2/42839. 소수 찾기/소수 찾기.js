function solution(numbers) {
    const answer = new Set();
    const num = numbers.split('');
    
    function isPrime(num){
        if(num < 2) return false;
        
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0) return false;
        }
        
        return true;
    }
    
    function getAllNumbers(curr, remain){
        if(curr.length > 0){
            answer.add(Number(curr));
        }
        
        for(let i = 0; i < remain.length; i++){
            getAllNumbers(curr + remain[i],
                         remain.filter((_, idx) => idx !== i)
                          )
            }
        }
    
    getAllNumbers("", num);
    
    for(const num of answer){
        if(!isPrime(num)) answer.delete(num);
    }
    
    
    return answer.size;
}