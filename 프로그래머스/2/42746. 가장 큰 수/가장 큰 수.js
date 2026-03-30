function solution(numbers) {
    var answer = '';
    let stringNum = [];
    
    for(let i = 0; i < numbers.length; i++){
        stringNum.push(numbers[i].toString());
    }
    
    stringNum.sort((a,b) => { return (b+a) - (a+b)})
    
    answer = stringNum.reduce((result, curr) => result += curr)
    
    return answer[0] === "0" ? "0" : answer;
}