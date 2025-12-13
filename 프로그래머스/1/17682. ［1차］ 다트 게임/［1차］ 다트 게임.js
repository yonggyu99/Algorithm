function solution(dartResult) {
    const scores = [];
    let currentNumber = 0;
    
    for(let i = 0; i < dartResult.length; i++){
        const ch = dartResult[i];
        
        if(ch >= "0" && ch <= "9"){
            currentNumber = currentNumber * 10 + Number(ch);
            continue;
        }
        
        if (ch === "S" || ch === "D" || ch === "T") {
            let score = currentNumber;
            
            if(ch === "S") score = score ** 1;
            if(ch === "D") score = score ** 2;
            if(ch === "T") score = score ** 3;
            
            scores.push(score);
            currentNumber = 0;
            continue;
        }
        
        if (ch === "*" || ch === "#"){
            const lastIndex = scores.length - 1;
            
            if (ch === "*"){
                scores[lastIndex] *= 2;
                
                if(lastIndex - 1 >= 0){
                    scores[lastIndex - 1] *= 2;
                }
            }
            
            if (ch === "#"){
                scores[lastIndex] *= -1;
            }
        }
    }
    return scores.reduce((sum, v) => sum + v, 0);
}