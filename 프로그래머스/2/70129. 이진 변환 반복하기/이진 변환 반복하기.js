function solution(s) {
    var answer = [];
    var count = 0;
    var zero_delete = 0;
    
    while(s !== "1"){
        var zero = (s.match(/0/g) || []).length;
        zero_delete += zero;
        s = s.replace(/0/g, "");
        var len = s.length;
        s = len.toString(2);
        count ++;   
    }
    
    answer = [count , zero_delete]
    
    return answer;
}