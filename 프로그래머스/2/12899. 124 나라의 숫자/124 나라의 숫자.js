function solution(n) {
    function nToNary(num) {
        if (num <= 0) return '';

        let remain = num % 3;
        let quotient = Math.floor(num / 3);
        let currentSymbol = '';

        if (remain === 0) {
            currentSymbol = '4';
            quotient -= 1;
        } else if (remain === 1) {
            currentSymbol = '1';
        } else {
            currentSymbol = '2';
        }

        return nToNary(quotient) + currentSymbol;
    }

    return nToNary(n);
}