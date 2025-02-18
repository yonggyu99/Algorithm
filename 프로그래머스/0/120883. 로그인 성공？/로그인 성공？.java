class Solution {
    public String solution(String[] id_pw, String[][] db) {
        String answer = "";
        for(String[] str : db){
            if(str[0].equals(id_pw[0]) && str[1].equals(id_pw[1])){
                answer = "login";
            }
            else if (str[0].equals(id_pw[0]) && !str[1].equals(id_pw[1])){
                answer = "wrong pw";
            }
            else if(!str[0].equals(id_pw[0]) && !str[1].equals(id_pw[1])){
                answer = "fail";
            }
        }
        
        return answer;
    }
}