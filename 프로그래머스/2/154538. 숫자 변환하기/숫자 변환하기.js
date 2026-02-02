function solution(x, y, n) {
    if(x===y) return 0;
    
    const queue = [[x, 0]];
    const visited = new Set();
    
    visited.add(x);
    
    let head = 0;
    while(head < queue.length){
        const [curr, dist] = queue[head++];
        
        for(const next of [curr + n, curr * 2, curr * 3]){
            if(next === y) return dist + 1;
            
            if(next < y && !visited.has(next)){
                visited.add(next);
                queue.push([next, dist + 1]);
            }
        }
    }
    return -1;
}