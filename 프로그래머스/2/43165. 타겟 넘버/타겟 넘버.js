function solution(numbers, target) {
    let answer = 0;
    
    function dfs(index, curr){
        
        if(index === numbers.length){
            if(curr === target) answer++;
            return
        }
        
        
        dfs(index + 1, curr + numbers[index]);
        dfs(index + 1, curr - numbers[index]);
    }
    
    dfs(0, 0);
    
    return answer;
}