function solution(numbers, target) {
    var answer = 0;
    
    function dfs(index, current){
        if(index === numbers.length){
            if(target === current){
                answer ++;
            }
            return;
        }
        
        dfs(index + 1, current + numbers[index]);
        dfs(index + 1, current - numbers[index]);
    }
    
    dfs(0, 0)
    return answer;
}