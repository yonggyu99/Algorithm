function solution(fees, records) {
    const getMinutes = (time) => {
        const [h, m] = time.split(':').map(Number);
        return h * 60 + m;
    };
    
    const inTimeMap = {};
    const totalTimeMap = {};
    
    for(const record of records){
        const [time, id, type] = record.split(' ');
        const mins = getMinutes(time);
        
        if(type === 'IN'){
            inTimeMap[id] = mins;
        } else{
            const duration = mins - inTimeMap[id];
            totalTimeMap[id] = (totalTimeMap[id] || 0) + duration;
            delete inTimeMap[id]
        }
    }
    
    for(const id in inTimeMap){
            const duration = 1439 - inTimeMap[id];
            totalTimeMap[id] = (totalTimeMap[id] || 0) + duration;
            delete inTimeMap[id]
    }
    
    
    const result = Object.keys(totalTimeMap).sort((a, b) => a - b).map(id => {
        const time = totalTimeMap[id];
        const [basicTime, basicFee, unitTime, unitFee] = fees;
        
        if(time <= basicTime) return basicFee;
        
        return basicFee + Math.ceil((time - basicTime) / unitTime) * unitFee;
    })
    return result
}