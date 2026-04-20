function solution(word) {
    var answer = 0;
    const dic = ["A", "E", "I", "O", "U"];
    let count = 0;
    
    function dfs(current){
        if(current === word){
            answer = count;
            return;
        }
        
        if(current.length >= 5) return;
        
        for(let i = 0; i < dic.length; i++){
            if(answer > 0) return;
            
            count++;
            
            dfs(current + dic[i]);
        }
    }
    
    dfs("")
    
    return answer;
}