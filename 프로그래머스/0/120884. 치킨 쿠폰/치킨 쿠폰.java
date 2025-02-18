class Solution {
    public int solution(int chicken) {
        int service = 0;
        int cp = chicken;
        
        while(cp >= 10){
            int newService = cp / 10;
            service = newService + service;
            cp = newService + (cp % 10);
        }
        
        return service;
    }
}