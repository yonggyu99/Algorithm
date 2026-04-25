function solution(n, computers) {
    var answer = 0;
    let visited = new Array(n).fill(false);
    
    function dfs(i){
        visited[i] = true;
        
        for(let j = 0; j < n; j++){
            if(computers[i][j] === 1 && !visited[j]){
                visited[j] = true;
                dfs(j);
            }
        }
    }
    
    for(let i = 0; i < n; i++){
        if(!visited[i]){
            answer++;
            dfs(i);
        }    
    }
    return answer;
}