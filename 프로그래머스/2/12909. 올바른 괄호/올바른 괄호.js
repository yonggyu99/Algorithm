function solution(s){
    var count = 0;
    
    for(ch of s){
        if(ch === '('){
            count ++;
        }else count --;
        
        if (count <0) return false;
    }
    

    return count === 0;
}