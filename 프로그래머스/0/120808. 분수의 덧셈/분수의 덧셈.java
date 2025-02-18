class Solution {

    private int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    public int[] solution(int numer1, int denom1, int numer2, int denom2) {

        int lcm = (denom1 * denom2) / gcd(denom1, denom2);


        int newNumer1 = numer1 * (lcm / denom1);
        int newNumer2 = numer2 * (lcm / denom2);

        int sumNumer = newNumer1 + newNumer2;
        int sumDenom = lcm;


        int gcdValue = gcd(sumNumer, sumDenom);
        return new int[]{sumNumer / gcdValue, sumDenom / gcdValue};
    }
}
