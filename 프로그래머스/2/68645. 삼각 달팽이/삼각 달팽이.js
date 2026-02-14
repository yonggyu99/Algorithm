function solution(n) {
    let triangle = Array.from({length : n}, (_, i) => Array(i+1).fill(0));
    let num = 1;
    let r = -1;
    let c = 0;
    
    for(let i = 0; i < n; i++){
        for(let j = i; j < n; j++){
            //1. 아랫방향
            if(i % 3 === 0){
                r++;
                
            }
            //2. 오른쪽 방향
            else if(i % 3 === 1){
                c++;
            }
            else{
                r--;
                c--;
            }
            triangle[r][c] = num;
            num++;
            
            
            //3. 왼쪽 대각선 상향
        }
    }
    return triangle.flat();
}