function solution(n, infection, edges, k) {
    var maxInfected = 0;
    let adj = Array.from({length : n + 1}, () => []);
    
    for(let [v1, v2, type] of edges){
        adj[v1].push({to : v2, type : type});
        adj[v2].push({to : v1, type : type});
    }
    
    function spread(currentInfected, pipeType){
        const nextInfected = new Set(currentInfected);
        const queue = [...currentInfected];
        
        let head = 0;
        while(head < queue.length){
            const curr = queue[head++];
            
            for(let {to, type} of adj[curr]){
                if(type === pipeType && !nextInfected.has(to)){
                    queue.push(to);
                    nextInfected.add(to);
                }
            }
        }
        
        return nextInfected;
    }
    
    function backTrack(infectedSet, remainK, lastType){
        maxInfected = Math.max(maxInfected, infectedSet.size);
        
        if(remainK === 0 || infectedSet.size === n) return;
        
        for(let type = 1; type <= 3; type++){
            if(type === lastType) continue;
            
            const nextSet = spread(infectedSet, type);
            
            if(nextSet.size === infectedSet.size){
                maxInfected = Math.max(maxInfected, nextSet.size);
                continue;
            }
            backTrack(nextSet, remainK - 1, type);
        }
    }
    
    const initialInfected = new Set([infection]);
    
    backTrack(initialInfected, k, -1);
    
    return maxInfected;
}