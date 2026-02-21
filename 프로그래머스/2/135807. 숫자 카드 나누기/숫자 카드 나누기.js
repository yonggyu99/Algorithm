function solution(arrayA, arrayB) {
    let answer = 0;
    
    const gcdA = arrayA.reduce((acc, curr) => getGCD(acc, curr));
    const gcdB = arrayB.reduce((acc, curr) => getGCD(acc, curr));
    
    if(cantDevide(gcdA, arrayB)){
        answer = Math.max(answer, gcdA);
    }
    
    if(cantDevide(gcdB, arrayA)){
        answer = Math.max(answer, gcdB);
    }
    
    return answer;
}

function getGCD(a, b) {
    return b === 0 ? a : getGCD(b, a % b);
}

function cantDevide(divisor, array){
    return array.every(val => val % divisor !== 0);
}