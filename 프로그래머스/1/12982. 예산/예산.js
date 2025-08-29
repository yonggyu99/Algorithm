function solution(d, budget) {
    var count = 0;
    d.sort((a,b)=>a-b);
    for(var i = 0; i<d.length; i++){
        if(budget-d[i]>=0){
            budget -=d[i];
            count++;
        }
        else break;
    }
    return count;
}