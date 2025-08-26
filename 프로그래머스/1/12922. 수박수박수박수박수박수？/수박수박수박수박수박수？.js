function solution(n) {
    var answer = '';
    answer = "수박".repeat(Math.ceil(n/2)).slice(0,n)
    return answer;
}