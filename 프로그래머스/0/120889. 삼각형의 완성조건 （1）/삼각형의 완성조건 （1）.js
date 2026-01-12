function solution(sides) {
    var sum = 0;
    let Max = Math.max(...sides);
    
    for(let i = 0; i < sides.length; i++){
        sum += sides[i];
    }
    
    if((sum-Max)>Max) return 1;
    else return 2;
    console.log((sum-Max), Max)
}