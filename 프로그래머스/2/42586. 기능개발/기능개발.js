function solution(progresses, speeds) {
    var answer = [];
    let completeDays = [];
    
    for(let i = 0; i < progresses.length; i++){
        completeDays[i] = Math.ceil((100 - progresses[i]) / speeds[i]);
    }
    
    while(completeDays.length > 0){
        const currDays = completeDays.shift();
        let count = 1;
        
        while(completeDays.length > 0 && currDays >= completeDays[0]){
            count++;
            completeDays.shift();
        }
        
        answer.push(count);
        
    }
    
    console.log(progresses)
    return answer;
}