function solution(book_time) {
    
    let answer = 0;
    
    
    function hourToMin(inTime, outTime){
        inTime = inTime.split(":");
        outTime = outTime.split(":");
        
        inTime = Number(inTime[0]) * 60 + Number(inTime[1]);
        outTime = Number(outTime[0]) * 60 + Number(outTime[1]);
        
        return [inTime, outTime];
    }
    
    for(let i = 0; i < book_time.length; i++){
        const [inTime, outTime] = book_time[i];
        
        book_time[i] = hourToMin(inTime, outTime);
    }
    
    book_time.sort((a,b) => a[0] - b[0]);
    
    let room = [];
    
    for(let i = 0; i < book_time.length; i++){
        let pointer = 0;
        let flag = false;
        const [currInTime, currOutTime] = book_time[i];
        
        
        while(pointer < room.length){
            
            if(currInTime >= room[pointer] + 10){
                flag = true;
                room[pointer] = currOutTime;
                break;
            }
            pointer ++
        }
        
        
        if(!flag){
                room.push(currOutTime);
        }
        
        answer = room.length;
    }
    

    return answer;
}