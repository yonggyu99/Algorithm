function solution(my_string) {
    var answer = '';
    let arr = my_string.split('');
    for(let i = 0; i < Math.floor(arr.length / 2 ); i++){
        let temp = '';
        temp = arr[i];
        arr[i] = arr[arr.length -i -1];
        arr[arr.length -i -1] = temp;
        }
    
    answer = arr.join('')
    return answer;
}