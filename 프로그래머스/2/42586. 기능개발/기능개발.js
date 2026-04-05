function solution(progresses, speeds) {
    var answer = [];
    
    let remainDays = [];
    const stack = [];
    
    for(let i = 0; i < progresses.length; i++){
        let remainDay = Math.ceil((100 - progresses[i]) / speeds[i]);
        remainDays.push(remainDay);
    };
    
    console.log(remainDays);
    while(remainDays.length > 0){
        let count = 1;
        let curr = remainDays.shift();
        while(remainDays.length >0 && remainDays[0] <= curr){
            remainDays.shift();
            count ++;
        }
        
        answer.push(count);
    }
    
    
    return answer;
}