function solution(clothes) {
    let type = {};
    let answer = 1;
    
    for(const [cloth, clothType] of clothes){
        type[clothType] = (type[clothType] || 0) + 1;
    }
    
    for(const cloth in type){
        answer *= (type[cloth] + 1)
    }
    
    console.log(type)
    return answer - 1;
}