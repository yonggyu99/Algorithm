function solution(s) {
    var answer = true;
    
    if(s.length !==4 && s.length !==6){
        return false;
    }
    for(var i = 0; i<s.length; i++){
        if(isNaN(s[i])){
         return false;   
        }
        }
    return true;
}