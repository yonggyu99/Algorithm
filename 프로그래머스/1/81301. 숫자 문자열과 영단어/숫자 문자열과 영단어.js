function solution(s) {
    var answer = 0;
    const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    for(var i = 0; i<words.length; i++){
        s = s.replaceAll(words[i], i)
    }
    
    return Number(s);
}