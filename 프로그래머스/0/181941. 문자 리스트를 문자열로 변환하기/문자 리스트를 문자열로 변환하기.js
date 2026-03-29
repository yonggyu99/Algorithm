function solution(arr) {
    var answer = '';
    return arr.reduce((result, cur) => result += cur.toString());
}