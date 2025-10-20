function solution(brown, yellow) {
    var answer = [];
    let total = brown + yellow;
    
    for(let height = 3; height <= total / height; height ++ ){
        let width = total/height;
        
        if(Number.isInteger(width)){
            if((height-2)*(width-2) === yellow){
                return [width, height]
            }
        }
    }
}