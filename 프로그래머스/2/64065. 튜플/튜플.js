function solution(s) {
    const inner = s.slice(2, -2);
    
    const startNum = inner.split("},{");
    
    const Num = startNum.map(x => x.split(",").map(Number));
    
    Num.sort((a,b) => a.length -b.length);
    
    const seen = new Set();
    let answer = [];
    
    for(let arr of Num){
        for(let x of arr){
            if(!seen.has(x)){
                seen.add(x);
                answer.push(x);
                break;
            }
        }
    }
    return answer;
}