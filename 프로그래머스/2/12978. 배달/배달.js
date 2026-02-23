function solution(N, road, K) {
    let answer = 0;

//     N : 마을의 개수
//     road : (a,b,c) a와 b는 연결되는 마을 c는 도로를 지나는데 걸리는 시간
//     K : 음식의 배달 가능 시간
    
    let adj = Array.from({length : N + 1}, () => []);
    
    
    
    for(const [town1, town2, weight] of road){
        adj[town1].push({node : town2, weight : weight});
        adj[town2].push({node : town1, weight : weight});
    }
    
    let dist = Array.from({length : N + 1}, () => Infinity);
    
    dist[1] = 0;
    
    let queue = [{node : 1, time : 0}];
    
    while(queue.length > 0){
        let {node : current, time : currentTime} = queue.shift();
        
        if(dist[current] < currentTime) continue;
        
        for(const neighbor of adj[current]){
            
            const nextTime = currentTime + neighbor.weight;
            
            if(nextTime < dist[neighbor.node]){
                dist[neighbor.node] = nextTime;
                queue.push({node : neighbor.node, time : nextTime});
            }
        }
    }
    
    for(let i = 0; i < dist.length; i++){
        if(dist[i] <= K) answer++;
    }
    

    return answer;
}