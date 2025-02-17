class Solution {
    public long solution(String numbers) {
        String[] word = {
            "zero", "one", "two", "three", "four", 
            "five", "six", "seven", "eight", "nine"
        };

        for (int i = 0; i < word.length; i++) {
            numbers = numbers.replace(word[i], String.valueOf(i));
        }
        
        return Long.parseLong(numbers);
    }
}
