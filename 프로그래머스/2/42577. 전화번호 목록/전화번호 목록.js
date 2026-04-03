function solution(phone_book) {
    var answer = true;
    const hasPhone = new Set();
    
    for(const number of phone_book){
        hasPhone.add(number);
    }
    
    for(const number of phone_book){
        let prefix = "";
        
        for(let i = 0; i < number.length - 1; i++){
            prefix += number[i];
            
            if(hasPhone.has(prefix)) return false;
        }
    }
    
    
    return true;
}