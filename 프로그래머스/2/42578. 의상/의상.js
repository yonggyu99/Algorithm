function solution(clothes) {
    const countByType = {};
    
    for (const [name, type] of clothes){
        countByType[type] = (countByType[type] || 0) + 1;
    }
    
    let answer = 1;
    
    for(const type in countByType){
        answer *= (countByType[type] + 1);
    }
    return answer - 1;;
}