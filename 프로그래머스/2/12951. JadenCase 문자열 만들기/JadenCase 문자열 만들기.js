function solution(s) {
    var answer = '';
    var array = s.split('')
    array[0] = array[0].toUpperCase()
    for(var i = 1; i<array.length; i++){
        if(array[i-1] === ' '){
            array[i] = array[i].toUpperCase()
        }
        else{
            array[i] = array[i].toLowerCase()
        }
    }
    answer = array.join('')
    return answer;
}