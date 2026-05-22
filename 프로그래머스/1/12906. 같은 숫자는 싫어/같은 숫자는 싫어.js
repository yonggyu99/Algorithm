function solution(arr)
{
    var answer = [];
    for(let i = 0; i < arr.length; i++){
        answer.push(arr[i]);
        if(arr[i] === arr[i -1]){
            answer.pop(arr[i]);
        }
    }
    
    
    return answer;
}