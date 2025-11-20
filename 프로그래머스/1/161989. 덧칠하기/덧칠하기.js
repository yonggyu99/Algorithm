function solution(n, m, section) {
    var answer = 0;
    let paintedUntil = 0;
    
    for(let s of section){
        if(s <= paintedUntil) continue;
        
        answer ++;
        paintedUntil = s + (m - 1);
    }
    return answer;
}