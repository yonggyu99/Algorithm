function solution(n, wires) {
    let answer = n;
    
    let adj = Array.from({length : n + 1}, () => []);
    
    for(const [v1, v2] of wires){
        adj[v1].push(v2);
        adj[v2].push(v1);
    }
    
    function countTower(startNode, blockedNode, adj, n){
        let count = 0;
        const visited = Array.from({length : n + 1}, () => false);
        visited[startNode] = true;
        let queue = [startNode];
        
        while(queue.length > 0){
            const curr = queue.shift();
            count ++;
            
            for(const neighbor of adj[curr]){
                if(!visited[neighbor] && neighbor !== blockedNode){
                    queue.push(neighbor);
                    visited[neighbor] = true;
                }
            }
            
        }
        
        return count;
    };
    
    for(let [v1, v2] of wires){
        let count = countTower(v1, v2, adj, n);
        const diff = Math.abs(count - (n - count));
        answer= Math.min(answer, diff);
    }
    
    console.log(adj)
    
    return answer;
}