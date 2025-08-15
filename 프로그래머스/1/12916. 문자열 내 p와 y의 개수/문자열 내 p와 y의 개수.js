function solution(s){
    var answer = true;
    s = s.toLowerCase();
    var arr = [];
    arr = s.split('');
    var p = 0;
    var y = 0;
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]==='p'){
            p++;
        }else if(arr[i]==='y')
            y++;
    }
    if(p==y){
        answer = true;
    }else if(p===0&&y===0){
        answer = true;
    }
        else
        answer = false;
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log(s)

    return answer;
}