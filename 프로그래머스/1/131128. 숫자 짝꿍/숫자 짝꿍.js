function solution(X, Y) {
    let answer = '';
    const countX = Array(10).fill(0);
    const countY = Array(10).fill(0);
    
    for(let ch of X){
        countX[ch]++;
    }
    
    for(let ch of Y){
        countY[ch]++;
    }
    
    for(let d = 9; d >= 0; d--){
        let cnt = Math.min(countX[d], countY[d]);
        if(cnt>0){
            answer += String(d).repeat(cnt);
        }
    }
    
    if(answer === "") return "-1";
    
    if(answer[0] === "0") return "0";
    
    
    return answer;
}