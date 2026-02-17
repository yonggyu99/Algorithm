function solution(weights) {
    let weightsMap = {};
    let answer = 0;
    
    let ratios = [3/2, 4/2, 4/3];
    for(const weight of weights){
        weightsMap[weight] = (weightsMap[weight] || 0) + 1;
    }
    
    for(const weight in weightsMap){
        let n = weightsMap[weight];
        
        if( n >= 2){
            answer += (n * (n - 1)) / 2;
        }
        
        for(const ratio of ratios){
            if(weightsMap[ratio * weight]){
                answer = answer + n * weightsMap[ratio * weight]
            }
        }
    }
    return answer;
}