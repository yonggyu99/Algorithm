function solution(progresses, speeds) {
    var answer = [];
    const remainDays = [];
    
    for(let i = 0; i < progresses.length; i++){
        const remainDay = Math.ceil((100 - progresses[i]) / speeds[i]);
        remainDays.push(remainDay);
    }
    
    while(remainDays.length > 0){
        let count = 1;
        let curr = remainDays.shift();
        while(remainDays.length > 0 && curr >= remainDays[0]){
            count++;
            remainDays.shift();
        }
        answer.push(count);
    }
    console.log(remainDays);
    return answer;
}