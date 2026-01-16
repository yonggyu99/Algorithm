function solution(priorities, location) {
    const queue = priorities.map((p, idx) => ({ p, idx}));
    let order = 0;
    
    while (queue.length > 0){
        const cur = queue.shift();
        
        const maxP = Math.max(...queue.map(x=> x.p), cur.p);
        
        if(cur.p < maxP){
            queue.push(cur);
        }else{
            order++;
            if(cur.idx === location) return order;
        }
    }
}