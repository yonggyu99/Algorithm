function solution(k, dungeons) {
    var answer = -1;
    const visited = new Array(dungeons.length).fill(false);
    
    function dfs(remainCost, count){
        
        if(answer < count) answer = count;
        
        for(let i = 0; i < dungeons.length; i++){
            if(visited[i]) continue;
            if(dungeons[i][0] > remainCost) continue;
            
            visited[i] = true;
            dfs(remainCost - dungeons[i][1], count + 1);
            visited[i] = false;
        }
        
        
    }
    
    dfs(k, 0);
    
    return answer;
}