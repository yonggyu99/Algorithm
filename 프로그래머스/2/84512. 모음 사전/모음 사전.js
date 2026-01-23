function solution(word) {
    let answer = 0;
    let alpah = ['A', 'E', 'I', 'O', 'U'];
    let weight = [781, 156, 31, 6, 1]
    
    for(let i = 0 ; i < word.length; i++){
        let index = alpah.indexOf(word[i]);
        answer += index * weight[i] + 1;
    }
    return answer;
}