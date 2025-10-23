function solution(n)
{
    let battery = 0;

    while(n>0){
        if(n%2 !== 0){
            n -= 1;
            battery ++
        }
        else n/=2
    }
    return battery
}