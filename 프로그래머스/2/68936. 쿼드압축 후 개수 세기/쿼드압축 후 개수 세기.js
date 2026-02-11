function solution(arr) {
    let zeroCount = 0;
    let oneCount = 0;
    
    function divide(r, c, n){
        let isSame = true;
        for(let i = r; i < r + n; i++){
            for(let j = c; j < c + n; j++){
                if (arr[r][c] !== arr[i][j]){
                    isSame = false;
                    break;
                }
            }
            if(!isSame) break;
        }
        if(isSame){
            arr[r][c] === 0 ? zeroCount ++ : oneCount ++ ;
            return;
        }
        
        let half = n / 2;
        divide(r, c, half);
        divide(r, c + half, half);
        divide(r + half, c, half);
        divide(r + half, c + half, half);
    }
    
    divide(0, 0, arr.length);
    return [zeroCount, oneCount];
}