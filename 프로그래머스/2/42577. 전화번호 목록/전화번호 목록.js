function solution(phone_book) {
    const numObj = {};
    
    for(const number of phone_book){
        numObj[number] = true;
    }
    
    for(const number of phone_book){
        let prefix = "";
        for(let i = 0; i < number.length - 1; i++){
            prefix += number[i];
            
            if(numObj[prefix]) return false;
        }
    }
    return true;
}