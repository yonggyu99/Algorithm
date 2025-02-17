class Solution {
    public String solution(String myString, String pat) {

        String lowerMyString = myString.toLowerCase();
        String lowerPat = pat.toLowerCase();


        int index = lowerMyString.lastIndexOf(lowerPat);


        return myString.substring(0, index + lowerPat.length());
    }
}
