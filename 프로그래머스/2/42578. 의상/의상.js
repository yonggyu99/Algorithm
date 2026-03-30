function solution(clothes) {
    let answer = 1;
    let clothesType = {};
    
    for(const cloth of clothes){
        clothesType[cloth[1]] = (clothesType[cloth[1]] || 0) + 1;
    }
    
    for(const type in clothesType){
       answer *= (clothesType[type] + 1) 
    }
    
    return answer - 1;
}