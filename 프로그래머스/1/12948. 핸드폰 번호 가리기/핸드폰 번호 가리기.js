function solution(phone_number) {
    var answer = '';
    const last = phone_number.slice(-4);
    const hidden = "*".repeat(phone_number.length-4);
    
    answer = hidden + last;
    return answer;
}