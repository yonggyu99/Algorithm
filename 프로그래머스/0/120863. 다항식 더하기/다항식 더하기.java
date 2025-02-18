class Solution {
    public String solution(String polynomial) {
        String[] terms = polynomial.split(" ");
        
        int xSum = 0, numSum = 0;

        for (String term : terms) {
            if (term.contains("x")) {
                if (term.equals("x")) {
                    xSum += 1;
                } 
                else {
                    xSum += Integer.parseInt(term.replace("x", "")); 
                }
            } 
            else if (!term.equals("+")) {
                numSum += Integer.parseInt(term);
            }
        }


        StringBuilder result = new StringBuilder();
        
        if (xSum > 0) {
            if (xSum == 1) {
                result.append("x");
            } 
            else {
                result.append(xSum).append("x");
            }
        }

        if (numSum > 0) {
            if (result.length() > 0) {
                result.append(" + ");
            }
            result.append(numSum);
        }

        return result.toString();
    }
}
