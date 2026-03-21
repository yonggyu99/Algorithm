function solution(cost, hint) {
    var answer = 0;
    const n = cost.length;
    
    let dp = Array.from({ length : n + 1 }, () => new Map());
    
    const initialBag = new Array(n).fill(0).join(',');
    dp[0].set(initialBag, 0);
    
    const update = (stage, bagArr, newCost) => {
        const key = bagArr.join(',');
        if(!dp[stage].has(key) || dp[stage].get(key) > newCost){
            dp[stage].set(key, newCost);
        }
    }
    
    for(let i = 0; i < n; i++){
        for(let [bagStr, currentTotal] of dp[i]){
            const bag = bagStr.split(',').map(Number);
            const myHints = bag[0];
            
            const maxCanUse = Math.min(myHints, n - 1);
            for(let use = 0; use <= maxCanUse; use++){
                const solveCost = cost[i][use];
                
                let nextBagBase = bag.slice(1);
                
                update(i + 1, nextBagBase, currentTotal + solveCost);
                
                if(i < n - 1 && hint[i]){
                    const [price, ...items] = hint[i];
                    let buyBag = [...nextBagBase];
                    for(let hNum of items){
                        const target = hNum - (i + 1) - 1;
                        if(target >= 0) buyBag[target]++;
                    }
                    update(i + 1, buyBag, currentTotal + solveCost + price);
                }
            }
        }
    }
    return Math.min(...dp[n].values());
}