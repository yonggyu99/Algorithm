function solution(numbers) {
    
    const answer = new Set();
    const nums = numbers.split('');
    
    function getAllNumbers(current, remaining){
        if(current.length > 0){
            answer.add(Number(current));
        }
        
        for(let i = 0; i < remaining.length; i++){
            getAllNumbers(
            current + remaining[i],
            remaining.filter((_, idx) => idx !== i)
            );
        }
    }
    getAllNumbers("", nums);
    
    function isPrime(num){
        if(num < 2) return false;
        for(let i = 2; i<= Math.sqrt(num); i++){
            if(num % i === 0) return false;
        }
        return true;
    }
    
    let count = 0;
    
    for(const num of answer){
        if(isPrime(num)) count++;
    }
    return count;
}