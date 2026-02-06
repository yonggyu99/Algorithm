function solution(record) {
    const answer = [];
    const userMap = {};
    
    for(const line of record ){
        const [type, uid, nickname]= line.split(' ');
        
        if(type === 'Enter' || type === 'Change'){
            userMap[uid] = nickname;
        }
    }
    
    for(const line of record){
        const[type, uid] = line.split(' ');
        
        if(type === 'Enter'){
            answer.push(`${userMap[uid]}님이 들어왔습니다.`)
        }
        else if(type === 'Leave'){
            answer.push(`${userMap[uid]}님이 나갔습니다.`)
        }
    }
    return answer;
}