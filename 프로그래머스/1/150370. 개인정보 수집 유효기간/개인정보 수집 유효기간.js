function solution(today, terms, privacies) {
    const toDays = (dateStr) => {
        const [y, m, d] = dateStr.split('.').map(Number);
        return y*12*28 + (m - 1) * 28 + d;
    };
    
    const todayDays = toDays(today);
    
    const termMap = {};
    
    for(const t of terms){
        const [type, monthStr] = t.split(' ');
        termMap[type] = Number(monthStr);
    }
    
    const result = [];
    
    for (let i = 0; i <privacies.length; i++){
        const [dateStr, type]= privacies[i].split(' ');
        const collectedDays = toDays(dateStr);
        const expireDays = collectedDays + termMap[type] * 28;
        
        if(expireDays <= todayDays) {
            result.push(i + 1);
        }
    }
    return result;
}