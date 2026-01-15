function solution(topping) {
    
    const rightMap = new Map();
    for(const t of topping){
        rightMap.set(t, (rightMap.get(t) || 0) + 1);
    }
    
    const leftSet = new Set();
    let leftKinds = 0;
    let rightKinds = rightMap.size;
    
    let answer = 0;
    
    for(let i = 0; i < topping.length - 1; i++){
        const t = topping[i];
        
        if(!leftSet.has(t)){
            leftSet.add(t);
            leftKinds++;
        }
        
        const cnt = rightMap.get(t) - 1;
        if(cnt === 0){
            rightMap.delete(t);
            rightKinds --;
        }else{
            rightMap.set(t,cnt);
        }
        
        if(leftKinds === rightKinds) answer++;
    }
    return answer;
}