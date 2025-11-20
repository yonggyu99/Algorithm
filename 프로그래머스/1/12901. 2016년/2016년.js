function solution(a, b) {
    var answer = '';
    let days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    let months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    let totalDays = b - 1;
    
    for(let i = 0; i < a - 1; i++){
        totalDays += months[i];
    }
    
    let index = (totalDays + 5) % 7;
    
    answer = days[index];
    
    return answer;
}