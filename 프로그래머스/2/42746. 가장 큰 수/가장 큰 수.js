function solution(numbers) {
    let answer = '';
    const stringArr = [];
    
    for(const number of numbers){
        stringArr.push(number.toString());
    }
    
    answer = stringArr.sort((a, b) => (b + a) - (a + b)).reduce((result, curr) => result += curr);
    
    console.log(stringArr)
    return answer[0] === "0" ? "0" : answer;
}