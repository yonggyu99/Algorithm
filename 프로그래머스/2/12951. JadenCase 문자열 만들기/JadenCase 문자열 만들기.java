class Solution {
    public String solution(String s) {
        StringBuilder answer=  new StringBuilder();
        boolean isFirst = true;
        
        for(char c : s.toCharArray()){
            if( c== ' '){
                answer.append(c);
                isFirst = true;
            }
            else{
                if(isFirst){
                    answer.append(Character.toUpperCase(c));
                }
                    else{
                        answer.append(Character.toLowerCase(c));
                    }
                    isFirst = false;
                
            }
        }
        return answer.toString();
    }
}