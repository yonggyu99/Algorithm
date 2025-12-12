function solution(s) {
    var answer = 0;
    
    let x = null;
    let same = 0;
    let diff = 0;
    
    for (const ch of s){
        
        if(x === null){
            x = ch;
            same = 0;
            diff = 0;
        }
        
        if(ch === x) same ++;
        else diff ++;
        
        if(same === diff){
            answer ++;
            x = null;
            same = 0;
            diff = 0;
        }
    }
    
    if( x!== null){
        answer ++;
    }
    return answer;
}