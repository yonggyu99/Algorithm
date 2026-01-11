function solution(num_list) {
    var answer = [];
    for(let i = 0; i < Math.floor(num_list.length /2); i++){
        let temp = 0;
        temp = num_list[i];
        num_list[i] = num_list[num_list.length -i -1];
        num_list[num_list.length -i -1] = temp;        
    }
    return num_list;
}