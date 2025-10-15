function solution(s) {
    var answer = '';
    var array = s.split(' ').map(Number);
    array.sort((a,b) => a-b)
    
    answer = array[0] + ' ' + array[array.length - 1]
    return answer;
}