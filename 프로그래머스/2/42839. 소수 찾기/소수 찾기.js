function solution(numbers) {
    const result = new Set();
    const digits = numbers.split('');
    let count = 0;
    
    function getList(currentStr, remainingDigits){
        if(currentStr.length > 0){
            result.add(Number(currentStr));
        }
        
        for(let i = 0; i < remainingDigits.length; i++){
            const nextRemaining = [
                ...remainingDigits.slice(0, i),
                ...remainingDigits.slice(i+1)
            ];
            
            getList(currentStr + remainingDigits[i], nextRemaining);
        }
    }
    
    function isPrime(num){
        if(num < 2) return false;
        
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0) return false;
        }
        return true;
    }
    
    getList('', digits);
    
    result.forEach(num => {
        if(isPrime(num)) count++;
    })
    return count;
}