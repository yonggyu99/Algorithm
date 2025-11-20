function solution(number, limit, power) {
    var answer = 0;
    let divisor = Array(number + 1).fill(0);
    
    for(let i = 1; i <= number; i++){
        for(let j = i; j <= number;j += i){
            divisor[j]++;
        }
    }
    
    for(let k = 0; k < divisor.length; k++){
        if(divisor[k] > limit){
           divisor[k] = power; 
        }
        answer += divisor[k]
    }
    
    return answer;
}