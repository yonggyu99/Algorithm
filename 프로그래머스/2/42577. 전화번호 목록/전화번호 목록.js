function solution(phone_book) {
    
    let phoneNumber = {};
    
    for(const phone of phone_book){
        phoneNumber[phone] = true;
    }
    
    for(const number in phoneNumber){
        let prefix = "";
        for(let i = 0; i < number.length - 1; i++){
            prefix += number[i];
            
            if(phoneNumber[prefix]) return false;
        }
    }
    return true;
}