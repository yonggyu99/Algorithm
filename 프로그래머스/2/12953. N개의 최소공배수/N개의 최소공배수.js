function solution(arr) {
    var answer = 0;
    function gcd(a,b) {
        return b === 0 ? a : gcd(b, a % b)
    }
    function lcm(a,b) {
        return a * b / gcd(a, b)
    }
    
    answer = arr.reduce((now, next) => lcm(now, next));
    return answer;
}