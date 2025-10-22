function solution(k, tangerine) {
    const count = {};
    for(let size of tangerine){
        count[size] = (count[size] || 0 ) + 1;
    }
    
    const sorted = Object.values(count).sort((a,b) => (b-a))
    
    let total = 0;
    let kinds = 0;
    
    for(let num of sorted){
        total += num;
        kinds++;
        if(total >= k) break;
    }
    return kinds;
}
