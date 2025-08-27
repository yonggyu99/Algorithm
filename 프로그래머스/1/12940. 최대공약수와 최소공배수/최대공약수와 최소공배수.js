function solution(n, m) {
    var answer = [];
    function gcd(a,b){
        while(b!==0){
            let temp = b;
            b = a%b;
            a = temp;
        }
        return a;
    }
    
    var gcd_number = gcd(n,m);
    var lcm_number = (n*m)/gcd(n,m);
    
    answer = [gcd_number,lcm_number];
    return answer;
}