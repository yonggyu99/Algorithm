function solution(nums) {
    var answer = 0;
    
    const type = new Set();
    const size = nums.length / 2;
    
    for(let i = 0; i < nums.length; i++){
        type.add(nums[i]);
    }
    
    if(type.size < size){
        return type.size;
    }else return size;
    
    
    return answer;
}

//만약에 종류가 > 전체 /2 라면 => 가짓수가 되어야 하고?
//만약에 < 라면 전체 / 2가 되면 된다.


//[1,2,3,4,5,6]
//종류는 6,  /2 는 3, 최대한 많은 종류를 가지고 가고 싶음.